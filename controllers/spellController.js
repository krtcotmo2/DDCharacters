const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
  getAllSpells: function(req, res){
    const selChar = parseInt(req.query.id);
    console.log(selChar)
    db.CharSpells.findAll({
      where: {charID: selChar},
      order:['spellLevel', 'spellName']
    })
    .then(results => {
      res.status(200).json({results})
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({err:err})
    });
  },

  toggleSpell: function (req, res){
    console.log(req.body.id);
    console.log(req.body.currentStatus)
    const curStatus = req.body.currentStatus;
    const id = req.body.id;

    db.CharSpells.update({isCast: curStatus}, {
      where: {id: id}
    }).then(results =>{
      res.status(200).json(results[0] > 0);
    }).catch(err =>{
      res.status(503).json({err:err})
    })
  }
}