const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
  getAllFeats: function(req, res){
    const knownFeats = req.body.val.split(",");
    db.Feat.findAll({
      where: {id:{[Op.notIn]:knownFeats}}
    })
    .then(results => {
      res.status(200).json({ results });
    })
    .catch(err =>
      res.status(500).json({ error:err})
    );
  },

  addAFeat: async function(req, res){
    const feat = req.body.feat;
    const charID = req.body.charID;
    const newFeat = await db.CharFeat.create({
        featID: feat.id, 
        charID: charID})
      .then(arg => {
        let newCharFeat = arg.dataValues;
        newCharFeat.Feat = feat;
        console.log("newCharFeat", newCharFeat);
        return newCharFeat
      })
      .catch(err => {
        return err
      });
      res.json(newFeat);
    },

    deleteFeat: async function(req, res){
      console.log(req);
      const retVal =  await db.CharFeat.destroy({
        where:{id:req.params.id}
      }).then(arg => {
        console.log("arg", arg)
      return arg
      });
      res.json({'results': retVal});
    }
  
}