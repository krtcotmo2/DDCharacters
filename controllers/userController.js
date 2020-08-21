const db = require("../models");
const User = require('../models/user');
const Character = require('../models/character');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require(__dirname + '/../config/config.json')["secret"];
const saltRounds = 10;
const myPlaintextPassword = secret;


module.exports = {
  //USER
  loginUser: function(req, res){
    const { userEmail, password } = req.body;
    db.User.findOne( {
      where:{userEmail:userEmail},
    })
      .then(foundUser => {        
        if (!foundUser) {
          res.status(401).json({
            error: "email username not found"
          });
        } else {
          console.log(password, foundUser.userPassword)
          bcrypt.compare(password, foundUser.userPassword, function (err, match) {
            if (err) {
              res.status(500).json({
                error: "bcrypt.compare error"
              });
            } else if (!match) {
              res.status(401).json({
                error: "incorrect password"
              });
            } else {
              // Issue token
              const payload = {
                email: foundUser.userEmail,
                id: foundUser.userID,
                reset: foundUser.forcedReset
              };
              const token = jwt.sign(payload, secret, {
                expiresIn: "12h"
              });
              res.cookie("token", token, {
                httpOnly: true
              })
              res.json({
                userID:foundUser.userID,
                userName: foundUser.userName,
                userEmail:foundUser.userEmail,
                forcedReset:foundUser.forcedReset,
                userPassword: null
              });   
            }
          });
        }
      })
  },

  resetPassword: async function(req, res){
    const {userName, password, userID} = req.body
    const theHash =  bcrypt.hashSync(password, saltRounds, function(err, hash) {
      return hash;
    });    
    db.User.update({userPassword:theHash, forcedReset: false},{
      where:{userID:userID}
    }).then(nextNum => {        
      res.status(200).json({status:'done'})
    }).catch(err => {
      console.log("err",err)
      res.status(503).json({status:'server Error'})
    }); 
    
  },

  insertUser: async function(req, res){
    const {userName, password, userEmail} = req.body;
    const theHash =  bcrypt.hashSync(password, saltRounds, function(err, hash) {
      return hash;
    });    
    const retval = await db.User.create({userPassword:theHash, forcedReset: false, userEmail: userEmail, userName:userName})
    .then(results => results)
    .catch(err => {
      console.log("err",err)
      res.status(503).json({status:'server Error'})
    });
    res.json(retval);
  }
}