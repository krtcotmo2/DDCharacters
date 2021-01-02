const db = require("../models");
const User = require('../models/user');
const Race = require('../models/race');
const CharClass = require('../models/charClass');
const CharAC = require('../models/charAC');
const CharLevel = require('../models/charLevels');
const CharFeat = require('../models/charFeats');
const CharSkill = require('../models/charSkills');
const CharToHits = require('../models/charToHits');
const CharEquip = require('../models/charEquip');
const Alignments = require('../models/alignments');
const Feat = require('../models/feat');
const Save = require('../models/saves');
const Skill = require('../models/skills');
const Stats = require('../models/stats');
const ToHits = require('../models/toHits');

module.exports = {
  //CHARACTERS
    getCharacters: function(req, res){
      db.Character.findAll({attributes: ['charID', 'charName', 'charHP', 'charXP', 'init', 'isDead', 'image'],
          include: [
            {
              model: Race,
              attributes: ['raceDesc']
            },
            {
              model: User,
              attributes: ['userName', 'userEmail']
            },
            {
              model: CharAC,
              attributes: ['score'],
            },
            {
              model: CharLevel,
              attributes: ['classLevel'],
              include: [{
                model: CharClass,
                attributes: ['className']
              }
                // {attributes: ["id",'charID', 'score', 'isBase', "isMod", "modDesc"],
                // where:{charID:req.params.id},
                // })
          ]},
          {
            model: Alignments,
            attributes: ['alignID','alignName']
          }
        ],
          order: ['isDead','charName']
        })
        .then(function(results) {
          res.json({ results });
        })
        .catch(err => {        
          console.log(err)
          res.status(500).json({ error:err, comments:"Nice going jackass"});
        })
  
    },
    getBaseForChar: function(req, res){
      db.Character.findOne(
        {attributes: ['charID', 'charName', 'charHP', 'charXP', 'init', 'userID', 'isDead'],
        where:{charID:req.params.id},
        include: [
          {
            model: Race,
            attributes: ['raceID','raceDesc']
          },
          {
            model: Alignments,
            attributes: ['alignID','alignName']
          },
          {
            model: CharLevel,
            attributes: ['classLevel'],
            include: [{
              model: CharClass,
              attributes: ['className', 'classID']
            }]
          }
        ]
      })
      .then(results => {
        res.status(200).json({ charID: req.params.id.trim(), results:results });
      })
      .catch(err =>
        res.status(500).json({ error:err})
      );
    },
    newCharacter: async function(req, res){
      const userID = req.body.userID;
      const charName = req.body.charName;
      const charHP = req.body.charHP;
      const raceID = req.body.raceID;
      const alignID = req.body.alignID;
      const classID = req.body.classID;
      const classLvl = req.body.classLvl;
     
      const newChar = await db.Character.create({
        userID: userID,
        charName: charName,
        charHP: charHP,
        raceID: raceID,
        alignID: alignID,
        charXP: 0,
        init: 0,
        isDead: false,
        image: 'default.png',
      }).then(async (arg) => {
        let newCharObj = arg.dataValues;
        return newCharObj;
      })
      .catch(err => {
        return err
      });
      const newClass = await db.CharLevels.create({
        charID: newChar.charID,
        classID: classID,
        classLevel: classLvl
      })
      .then(results => {
        console.log(results)
        return results
      })
      .catch(err => {
        console.log(err)
        return err
      })
      res.json(newChar);
    },

  //FEATS
    getAllFeatsForChar: function(req, res){
      db.CharFeat.findAll({where:{charID:req.params.id},
        include: [{
          model: Feat,
          order: [[db.Feat, 'id', 'DESC']],
        }]})
      .then(results => {
        res.status(200).json({ charID: req.params.id.trim(), results:results });
      })
      .catch(err =>
        res.status(500).json({ error:err})
      );
    },  

  //STATS
    getAllstatsForChar: function(req, res){
      db.Stats.findAll({where:{charID:req.params.id}})
      .then(results => {
        res.status(200).json({ charID: req.params.id.trim(), results:results });
      })
      .catch(err =>
        res.status(500).json({ error:err})
      );
    },
    createUpdateStat: async function(req, res){
      const retVal =  await db.Stats.findOrCreate({
        where:{id:req.body.id},
        defaults: {
          score: req.body.score,
          modDesc: req.body.modDesc,
          isBase: req.body.isBase,
          isMod: req.body.isMod,
          charID: req.body.charID,
          statID: req.body.statID,
        }
      })
      .then(async oneItem => {
        if(oneItem[1]){
          let newVal = {          

            id: oneItem[0].dataValues.id,
            score: oneItem[0].dataValues.score,
            modDesc: oneItem[0].dataValues.modDesc,
            isBase: oneItem[0].dataValues.isBase,
            isMod: oneItem[0].dataValues.isMod,
            charID: oneItem[0].dataValues.charID,
            statID: oneItem[0].dataValues.statID,
          }
          return newVal
        }else{
          let updatedVal = await oneItem[0].update(
            {
              score:req.body.score, 
              modDesc: req.body.modDesc
            }
          ).then( async success => {
            let newVal = {
              id: success.dataValues.id,
              score: success.dataValues.score,
              modDesc: success.dataValues.modDesc,
              isBase: success.dataValues.isBase,
              isMod: success.dataValues.isMod,
              charID: success.dataValues.charID,
              statID: success.dataValues.statID,
            }
            return newVal
          }).catch(err => err);
          return updatedVal;
        }
      })
      res.json({'results': retVal});
    },
    deleteStat: async function(req, res){
      const retVal =  await db.Stats.destroy({
        where:{id:req.params.id}
      }).then(arg => {
      return arg
      });
      res.json({'results': retVal});
    },

  //SKILLS
    getAllSkillsForChar: function(req, res){
      db.CharSkill.findAll({where:{charID:req.params.id},
        include: [{
          model: Skill,
          order: [[db.Skill, 'skillID', 'DESC']],
        }]})
      .then(async (results) => {      
        res.status(200).json({ charID: req.params.id.trim(), results:results });
      })
      .catch(err =>
        res.status(500).json({ error:err})
      );
    },
    createUpdateSkill: async function(req, res){
      const retVal =  await db.CharSkill.findOrCreate({
        where:{id:req.body.id},
        defaults: {
          score: req.body.score,
          modDesc: req.body.modDesc,
          isRanks: req.body.isBase,
          isMod: req.body.isMod,
          isClassSkill: req.body.isClassSkill,
          charID: req.body.charID,
          skillID: req.body.skillID,
        }
      })
      .then(async oneItem => {
        let skillDetail = await db.Skill.findOne({where:{skillID:oneItem[0].dataValues.skillID}})
        .then(arg => arg);
        if(oneItem[1]){
          let newVal = {          
            Skill: {
              skillID: oneItem[0].dataValues.skillID, 
              skillName: skillDetail.dataValues.skillName,
              skillAttr:skillDetail.dataValues.skillAttr,
              skillDesc: skillDetail.dataValues.skillDesc,
              untrained: skillDetail.dataValues.untrained,
            },
            id: oneItem[0].dataValues.id,
            score: oneItem[0].dataValues.score,
            modDesc: oneItem[0].dataValues.modDesc,
            isRanks: oneItem[0].dataValues.isRanks,
            isMod: oneItem[0].dataValues.isMod,
            isClassSkill: oneItem[0].dataValues.isClassSkill,
            charID: oneItem[0].dataValues.charID,
            skillID: oneItem[0].dataValues.skillID,
          }
          return newVal
        }else{
          let updatedVal = await oneItem[0].update(
            {
              score:req.body.score, 
              modDesc: req.body.modDesc
            }
          ).then( async success => {
            let skillDetail = await db.Skill.findOne({where:{skillID:oneItem[0].dataValues.skillID}})
            .then(arg => arg);
            let newVal = {
              Skill: {
                skillID: oneItem[0].dataValues.skillID, 
                skillName: skillDetail.dataValues.skillName,
                skillAttr:skillDetail.dataValues.skillAttr,
                skillDesc: skillDetail.dataValues.skillDesc,
                untrained: skillDetail.dataValues.untrained,
              },
              id: success.dataValues.id,
              score: success.dataValues.score,
              modDesc: success.dataValues.modDesc,
              isRanks: success.dataValues.isRanks,
              isMod: success.dataValues.isMod,
              isClassSkill: success.dataValues.isClassSkill,
              charID: success.dataValues.charID,
              skillID: success.dataValues.skillID,
            }
            return newVal
          }).catch(err => err);
          return updatedVal;
        }
      })
      res.json({'results': retVal});
    },
    deleteSkill: async function(req, res){
      const retVal =  await db.CharSkill.destroy({
        where:{id:req.params.id}
      }).then(arg => {
      return arg
      });
      res.json({'results': retVal});
    },
  
  //SAVES
    getAllSavesForChar: function(req, res){
      db.CharSave.findAll(
        {attributes: ["id",'saveID', 'score', 'isBase', "isMod", "modDesc"],
        where:{charID:req.params.id},
        include: [{
          model: Save,
          attributes: ["saveDesc"],
          order: [
            [db.Save, 'saveID', 'ASC'],
            [db.CharSave, 'isBase', 'DESC'],
          ],
        }]})
      .then(results => {
        res.status(200).json({ charID: req.params.id.trim(), results:results });
      })
      .catch(err =>
        res.status(500).json({ error:err})
      );
    },
    createUpdateSave: async function(req, res){
      const retVal =  await db.CharSave.findOrCreate({
        where:{id:req.body.id},
        defaults: {
          score: req.body.score,
          modDesc: req.body.modDesc,
          isBase: req.body.isBase,
          isMod: req.body.isMod,
          charID: req.body.charID,
          saveID: req.body.saveID,
        }
      })
      .then(async oneItem => {
        if(oneItem[1]){
          let newVal = {
            Save: {
              saveDesc: "",
            },
            id: oneItem[0].id,
            isBase: oneItem[0].isBase,
            isMod: oneItem[0].isMod,
            modDesc: oneItem[0].modDesc,
            score: oneItem[0].score,
            saveID: oneItem[0].saveID,
          }
          return newVal
        }else{
          let updatedVal = await oneItem[0].update(
            {
              score:req.body.score, 
              modDesc: req.body.modDesc
            }
          ).then( async success => {
            let newVal = {
              Save: {
                saveDesc: "Fortitude",
              },
              id: success.dataValues.id,
              isBase: success.dataValues.isBase,
              isMod: success.dataValues.isMod,
              modDesc: success.dataValues.modDesc,
              score: success.dataValues.score,
              saveID: success.dataValues.saveID,
            }
            return newVal
          }).catch(err => err);
          return updatedVal;
        }
      })
      res.json({'results': retVal});
    },
    deleteSave: async function(req, res){
      const retVal =  await db.CharSave.destroy({
        where:{id:req.params.id}
      }).then(arg => {
      return arg
      });
      res.json({'results': retVal});
    },

  //TO HITS
    getAllToHitsForChar: function(req, res){
      db.CharToHits.findAll(
        {attributes: ["id",'toHitID', 'score', 'isBase', "isMod", "modDesc"],
        where:{charID:req.params.id},
        include: [{
          model: ToHits,
          attributes: ["toHitDesc", "damage", "critRange", "critDamage", "toHitOrder"],
          order: [
            [db.ToHits, 'toHitID', 'ASC'],
            [db.toHitID, 'isBase', 'DESC'],
          ],
        }]})
      .then(results => {
        for(let i of results){
          i.toHitDesc = i.ToHit.toHitDesc;
        }
        res.status(200).json({ charID: req.params.id.trim(), results:results });
      })
      .catch(err =>{
        res.status(500).json({ error:err})
      });
    },
    createUpdateToHits: async function(req, res){
      const retVal =  await db.CharToHits.findOrCreate({
        where:{id:req.body.id},
        defaults: {
          score: req.body.score,
          modDesc: req.body.modDesc,
          isBase: req.body.isBase,
          isMod: req.body.isMod,
          charID: req.body.charID,
          toHitID: req.body.toHitID,
        }
      })
      .then(async oneItem => {
        let hitDetail = await db.ToHits.findOne({where:{toHitID:oneItem[0].dataValues.toHitID}})
        .then(arg => arg);
        if(oneItem[1]){
          let newVal = {
            ToHit: {
              toHitDesc: hitDetail.dataValues.toHitDesc,
              damage: hitDetail.dataValues.damage,
              critRange: hitDetail.dataValues.critRange,
              critDamage: hitDetail.dataValues.critDamage
            },
            id: oneItem[0].id,
            isBase: oneItem[0].isBase,
            isMod: oneItem[0].isMod,
            modDesc: oneItem[0].modDesc,
            score: oneItem[0].score,
            toHitID: oneItem[0].toHitID,
          }
          return newVal
        }else{
          let updatedVal = await oneItem[0].update(
            {
              score:req.body.score, 
              modDesc: req.body.modDesc
            }
          ).then( async success => {
            let newVal = {
              ToHit: {
                toHitDesc: hitDetail.dataValues.toHitDesc,
                damage: hitDetail.dataValues.damage,
                critRange: hitDetail.dataValues.critRange,
                critDamage: hitDetail.dataValues.critDamage
              },
              id: success.dataValues.id,
              isBase: success.dataValues.isBase,
              isMod: success.dataValues.isMod,
              modDesc: success.dataValues.modDesc,
              score: success.dataValues.score,
              toHitID: success.dataValues.toHitID,
            }
            return newVal
          }).catch(err => err);
          return updatedVal;
        }
      })
      res.json({'results': retVal});
    },
    deleteToHit: async function(req, res){
      const retVal =  await db.CharToHits.destroy({
        where:{id:req.params.id}
      }).then(arg => {
      return arg
      });
      res.json({'results': retVal});
    },

  //EQUIPMENT
    getAllEquipForChar: function (req, res) {
      db.CharEquip.findAll({
        where: {charID:req.params.id},
        order:['equipOrder']
        })
      .then(results => {
        res.status(200).json({ charID: req.params.id.trim(), results:results });
      })
      .catch(err =>{
        res.status(500).json({ error:err})
      });
    },
    createEquip: async function (req, res) {
      const retVal = await  db.CharEquip.create(req.body)
      .then(results => results)
      .catch(err => {
        return err
      });
      res.json(retVal);;
    },
    deleteEquip: async function (req, res) {
      const retVal =  await db.CharEquip.destroy({
        where:{id:req.params.id}
      }).then(arg => {
      return arg
      });
      res.json({'results': retVal});
    },
    reorder: async function (req, res) {
      let allUpdates = req.body.updates;
      let numUpdated = 0;
      allUpdates.forEach(async function(item){
        const theNote = await db.CharEquip.update({equipOrder:item.equipOrder},{
          where:{id:item.id}
        }).then(nextNum => { 
          numUpdated++;       
          return true;
        }).catch(err => {
          console.log("err",err)
        }); 
        if(numUpdated === allUpdates.length){
          res.status(200).json({done:true}) ;
          return;
        }
      });
    },

  //AC
    getAllACForChar: async function (req, res){
      db.CharACs.findAll(
        {attributes: ["id",'charID', 'score', 'isBase', "isMod", "modDesc"],
        where:{charID:req.params.id},
        })
      .then(results => {      
        res.status(200).json({ charID: req.params.id.trim(), results:results });
      })
      .catch(err =>{
        console.log(err);
        res.status(500).json({ error:err})
      });
    },
    createUpdateAC: async function(req, res){
      const retVal =  await db.CharACs.findOrCreate({
        where:{id:req.body.id},
        defaults: {
          score: req.body.score,
          modDesc: req.body.modDesc,
          isBase: req.body.isBase,
          isMod: req.body.isMod,
          charID: req.body.charID,
        }
      })
      .then(async oneItem => {
        if(oneItem[1]){
          let newVal = {
            id: oneItem[0].id,
            isBase: oneItem[0].isBase,
            isMod: oneItem[0].isMod,
            modDesc: oneItem[0].modDesc,
            score: oneItem[0].score,          
            charID: oneItem[0].charID,
          }
          return newVal
        }else{
          let updatedVal = await oneItem[0].update(
            {
              score:req.body.score, 
              modDesc: req.body.modDesc
            }
          ).then( async success => {
            let newVal = {
              id: success.dataValues.id,
              isBase: success.dataValues.isBase,
              isMod: success.dataValues.isMod,
              modDesc: success.dataValues.modDesc,
              score: success.dataValues.score,                 
              charID: success.dataValues.charID,
            }
            return newVal
          }).catch(err => err);
          return updatedVal;
        }
      })
      res.json({'results': retVal});
    },
    deleteAC: async function(req, res){
      const retVal =  await db.CharACs.destroy({
        where:{id:req.params.id}
      }).then(arg => {
      return arg
      });
      res.json({'results': retVal});
    },

  //HP
    updateHP: async function(req, res){
      const retVal =  await db.Character.findOne({
        where:{charID:req.body.charID},
      })
      .then(async oneItem => {
        oneItem.charHP = req.body.charHP;
        await oneItem.save();
        return  true;
      }).catch(err => {error: err})
      res.json({'results': retVal});

    },

  //INITIATIVE
    updateInit: async function(req, res){
      const retVal =  await db.Character.findOne({
        where:{charID:req.body.charID},
      })
      .then(async oneItem => {
        oneItem.init = req.body.init;
        await oneItem.save();
        return  true;
      }).catch(err => {error: err})
      res.json({'results': retVal});

    },
  //XP
    updateXP: async function(req, res){
      console.log(req.body)
      const retVal =  await db.Character.findOne({
        where:{charID:req.body.charID},
      })
      .then(async oneItem => {
        oneItem.charXP = req.body.charXP;
        await oneItem.save();
        return  true;
      }).catch(err => {error: err})
      res.json({'results': retVal});
    },
  //LEVELS PER CLASS
  updateClass: async function(req, res){
    const {id, charID, classID, classLevel} = req.body;
    const retVal = await db.CharLevels.findOrCreate({
      where:{id:id},
      defaults: {
        charID: charID, 
        classID: classID, 
        classLevel: classLevel
      }
    })
    .then(async item => {
      console.log("item", item)
      if(item[1]){
        let newClass = {
          charID: charID, 
          classID: classID, 
          classLevel: classLevel
        }
        let newCharClass = await db.CharLevels.create({
          charID: charID, 
          classID: classID, 
          classLevel: classLevel
        })
        .then(arg => arg)
        let newObj={...newCharClass.dataValues, Classes:newClass}
        return newObj
      }else{
        console.log(id, charID, classID, classLevel)
        let updatedVal = await item[0].update({
          charID: charID, 
          classID: classID, 
          classLevel: classLevel
        }).then( async success => {
          let newVal = await db.CharLevels.findOne({
            where:{'id':id }
          }).then(charClass => {
            return charClass;
          })
          let newObj = {...newVal.dataValues, Classes:success}
          return newObj
        })
        .catch(err => {
          console.log(err)
          return err;
        });
        return updatedVal
      }
    })
    res.status(200).json({'results': retVal});
  }
};