const db = require("../models");

module.exports = {
  getEpendables: function(req, res){
    db.Expendables.findAll({
      where:{charID:req.params.id},
      order:[["expType", "DESC"]],
    })
      .then(function(results) {
        res.json({ results });
      })
      .catch(err => {
        return res.status(500).json({ error:err})
      }
      );
  },
  insertExpendable: async function (req, res){
    const {description, expType, charID, qty} = req.body;
    const newExepndable = await db.Expendables.create({
        description: description,         
        expType: expType,
        qty: qty,
        charID: charID})
      .then(arg => {
        let exepndable = arg.dataValues;
        return exepndable
      })
      .catch(err => {
        return err
      });
      res.json(newExepndable);
  },
  
  updateExpendable: async function (req, res){
    const {id, description, expType, charID, qty} = req.body;
    const theExpendable = await db.Expendables.update(
      {
        description: description,
        expType: expType,
        charID: charID,
        qty: qty
      },{
        where:{'id':id}
      }).then(nextNum => {
        let newVal =  db.Expendables.findOne({
          where:{'id':id}
        }).then(expendable => {
          return expendable;
        })
        return newVal;
      }).catch(err => {
        console.log("err",err)
      });            
      res.json(theExpendable);
  },

  deleteExpendable: async function(req, res){
    const retVal =  await db.Expendables.destroy({
      where:{id:req.params.id}
    }).then(arg => {
    return arg
    });
    res.json({'results': retVal});
  },

};