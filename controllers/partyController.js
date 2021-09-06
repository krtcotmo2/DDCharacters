const db = require("../models");
const Party = require('../models/party');

module.exports = {
  getParties: function (req, res){
    db.Party.findAll()
      .then( results => res.json({results}))
      .catch( err => res.status(500).json({ error:err}))
  },

  getParty: function (req, res){
    db.Party.findAll({
      where:{partyID:req.params.partyID},
    })
      .then( results => res.json({results}))
      .catch( err => res.status(500).json({ error:err}))
  },

  updateHP: async function(req, res){
    // console.log(req.body)
    const curHP = req.body.curHP;
    const charID = req.body.charID;
    const partyID = req.body.partyID;
    // const newHP = db.Party.update( {curHP:curHP},
    //   { where:{partyID:partyID, charID:charID} })
    //   .then(() => true)
    //   .catch(err => console.log("err",err));
    // res.json(newHP);

    const retVal =  await db.Party.findOne({
      where:{charID:charID, partyID: partyID},
    })
    .then(async oneItem => {
      oneItem.curHP = curHP;
      await oneItem.save();
      return  true;
    }).catch(err => {error: err})
    res.json({'results': retVal});
  }
}