const db = require("../models");

module.exports = {
  getRaces: function(req, res){
    db.Race.findAll({attributes: ['raceID', 'raceDesc']})
      .then(function(results) {
        res.json({ results });
      })
      .catch(err =>
        res.status(500).json({ error:err})
      );
  },
  // getStoreSales: function(req, res){
  //   if (req.query.storeId) {
  //     db.Race
  //     .find({storeId: req.query.storeId })
  //     .where("items").ne([])
  //     .populate("storeId")
  //       .populate("items")
  //       .sort({storeId:1, purchaseDate:1})
  //     .then(foundArray => {
  //       res.json(foundArray);
  //     })
  //     .catch(err => res.status(422).json(err));
  //   }else{
  //     db.Purchase
  //       .find({})       
  //       .populate("storeId")
  //       .where("items").ne([])
  //       .populate("items")
  //       .sort({storeId:1, purchaseDate:1})
  //       .then(foundArray => {
  //         res.json(foundArray);
  //       })
  //       .catch(err => res.status(422).json(err));
  //   }
  // }
 

};