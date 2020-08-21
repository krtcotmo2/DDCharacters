const db = require("../models");
const User = require('../models/user');
const Character = require('../models/character');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const secret = require(__dirname + '/../config/config.json')["secret"];
const nmEmailAcct = require(__dirname + '/../config/config.json')["nmEmailAcct"];
const nmPass = require(__dirname + '/../config/config.json')["nmPass"];
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
  },

  newPassword: async function(req, res){
    const {userEmail} = req.body;
    const newPass = createPassword();
    const theHash =  bcrypt.hashSync(newPass, saltRounds, function(err, hash) {
      return hash;
    });

    const theReset = await db.User.update({userPassword:theHash, forcedReset: true},{
      where:{userEmail:userEmail}
    }).then(nextNum => {
      console.log(nextNum);
      if(nextNum[0] === 0){
        res.status(503).json({msg:"email not found"});
        return;
      }
      return nextNum
    })
    .catch(err => {
      console.log("err",err)
      res.status(404).json({msg:"email not found"})
    });


    if(theReset === undefined){
      return;
    }
    const emailed = await new Promise((resolve, reject) => {

      const smtpConnectionString = {
        service: 'gmail',
        auth: {
              user: nmEmailAcct,
              pass: nmPass
          }
      };
      const transporter = nodemailer.createTransport(smtpConnectionString);
      const mailOptions = {
          from: 'krtcotmo2@gmail.com',
          to: 'krtcotmo2@gmail.com',
          subject: 'DO NOT REPLY: Pathfinder Password Reset',
          html:"<h2>"+newPass+"</h2>"
      };
      transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            resolve(false);
          } else {
            console.log("true");
            resolve(true);          
          }
      });
    });

    

    console.log("ready return");
    if(theReset){
      res.json({pass:newPass, val: emailed, theReset: theReset});
    }
  }


}

function createPassword(){
  let newPass = '';
  const rString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(let d=0; d<8; d++){
    newPass += rString.charAt(Math.floor(Math.random()*rString.length));
  }
  return newPass;
}