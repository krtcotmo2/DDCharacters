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
  }
}