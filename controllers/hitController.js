const db = require("../models");
const CharToHits = require('../models/charToHits');
const ToHits = require('../models/toHits');


module.exports = {
  createUpdateHits: async function(req, res){
    const charID = req.body.charID;
    const retVal =  await db.ToHits.findOrCreate({
      where:{toHitID:req.body.id},
      defaults: {
        toHitDesc: req.body.toHitDesc,
        damage: req.body.damage,
        critRange: req.body.critRange,
        critDamage: req.body.critDamage,
      }
    })
    .then(async oneItem => {
      if(oneItem[1]){
        let newVal = {
          toHitID: oneItem[0].dataValues.toHitID,
          toHitDesc: oneItem[0].dataValues.toHitDesc,
          damage: oneItem[0].dataValues.damage,
          critRange: oneItem[0].dataValues.critRange,
          critDamage: oneItem[0].dataValues.critDamage,
        }
        
        let newCharToHit = await db.CharToHits.create({
          charID: charID,
          toHitID: newVal.toHitID,
          score: 0,
          isBase: 1,
          isMod: 0
        })
        .then(arg => arg);
        let newObj={...newCharToHit.dataValues, ToHit:newVal}
        return newObj
      }else{
        let updatedVal = await oneItem[0].update(
          {
            toHitDesc:req.body.toHitDesc, 
            damage: req.body.damage, 
            critRange: req.body.critRange, 
            critDamage: req.body.critDamage
          }
        ).then( async success => {
          let newVal = await db.CharToHits.findOne({
            where:{'charID':charID, toHitID: req.body.id }
          }).then(charHit => {
            return charHit;
          })
          let newObj = {...newVal.dataValues, ToHit:success}
          return newObj
        }).catch(err => {
          console.log(err)
          return err;
        });
        return updatedVal;
      }
    })
    res.json({'results': retVal});
  },

};