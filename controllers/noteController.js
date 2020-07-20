const db = require("../models");
const CharNotes = require('../models/notes');
const NoteItems = require('../models/noteItem');

module.exports = {
  getCharNotes: function(req, res){
    db.CharNotes.findAll({
      where:{charID:req.params.id},
      order:['noteOrder']
    })
      .then(results => {
        res.status(200).json({ charID: req.params.id.trim(), results:results });
      })
      .catch(err =>
        res.status(500).json({ error:err})
    );
  },
  getNoteItems: function(req, res){
    db.NoteItems.findAll({
      where:{noteID:req.params.id},
      order:['itemOrder']
    })
      .then(results => {
        res.status(200).json({ charID: req.params.id.trim(), results:results });
      })
      .catch(err =>
        res.status(500).json({ error:err})
    );
  },
}