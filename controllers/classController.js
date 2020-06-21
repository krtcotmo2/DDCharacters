const db = require("../models");

module.exports = {
  getClasses: function(req, res){
    db.CharClass.findAll({attributes: ['classID', 'className']})
      .then(function(results) {
        res.json({ results });
      })
      .catch(err =>
        res.status(500).json({ error:err})
      );
  },

};