const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
  getAllSpells: function(req, res){
    const selChar = parseInt(req.params.id);
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
    const isCast = req.body.isCast;
    const id = req.body.id;

    db.CharSpells.update({isCast: isCast}, {
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
    
  },

  deleteASpell: async function(req, res){
    const {id} = req.params.id;
    const deletedSpell = await db.CharSpells.destroy({
      where:{id: req.params.id}
    }).then(arg => {
      return arg
    }).catch(err => {      
      console.log("err", err)
    });
    res.json({'results': deletedSpell});
  },

  updateASpell: async function(req, res){
    const {id, spellName, spellLevel} = req.body;
    const updatedSpell = await db.CharSpells.update({spellLevel:spellLevel, spellName: spellName},{
      where:{id:id}
    }).then(arg => {
      return arg
    }).catch(err => console.log(err));
    res.json({'results': updatedSpell});
  },

}