const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
  getAllSkills: function(req, res){
    const knownSkills = req.body.val.split(",");
    db.Skill.findAll({
      where: {skillID:{[Op.notIn]:knownSkills}}
    })
    .then(results => {
      res.status(200).json({ results });
    })
    .catch(err =>
      res.status(500).json({ error:err})
    );
  },

  addASkill: async function(req, res){
    const skill = req.body.skill;
    const charID = req.body.charID;
    const newSkill = await db.CharSkill.create({
        skillID: skill.skillID, 
        charID: charID,
        isRanks: true, 
        isClassSkill: false, 
        isMod: false, 
        modDesc:'', 
        score: 0})
      .then(arg => {
        let newCharSkill = arg.dataValues;
        newCharSkill.Skill = skill;
        console.log("newCharSkill", newCharSkill);
        return newCharSkill
      })
      .catch(err => {
        return err
      });
      res.json(newSkill);
    }
  
}