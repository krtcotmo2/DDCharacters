const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
  getAllSpells: function(req, res){
    const selChar = parseInt(req.params.id);
    console.log("selChar", selChar)
    db.CharSpells.findAll({
      where: {charID: selChar},
      order:['spellLevel', 'spellName']
    })
    .then(results => {
      res.status(200).json({ charID: req.params.id.trim(), results:results })
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
    
  },

  addASpell: async function (req, res){
    const {name, level, charID} = req.body;    

    const newSpell = await db.CharSpells.create({
      charID: charID,
      spellName: name, 
      spellLevel: level, 
      isCast: false})
    .then(arg => {
      let insertedSpell = arg.dataValues;
      return insertedSpell
    })
    .catch(err => {
      return err
    });
    res.json(newSpell);
    
  }
}