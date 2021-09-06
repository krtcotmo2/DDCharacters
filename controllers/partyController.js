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
  }
}