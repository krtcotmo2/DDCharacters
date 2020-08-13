const db = require("../models");

module.exports = {

  statsByID: function(req, res){
    db.Stats.findAll({where:{charID:req.params.id}})
    .then(results => {
      res.status(200).json({ charID: req.params.id.trim(), results:results });
    })
    .catch(err =>
      res.status(500).json({ error:err})
    );
  }
 
}