const db = require("../models");
const CharNotes = require('../models/notes');
const NoteItems = require('../models/noteItem');

module.exports = {
  getCharNotes: async function(req, res){
    console.log("param", req.params.id)
    db.CharNotes.findAll({
      where:{charID:req.params.id},
      order:['noteOrder']
    })
      .then(results => {
        //console.log(results)
        res.status(200).json({ charID: req.params.id.trim(), results:results });
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ error:err})
      }
    );
  },
  getNoteItems: async function(req, res){
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
  insertNoteHeader: async function (req, res){
    const note = req.body.note;
    const charID = req.body.charID;
    
    const lastOrder = await db.CharNotes.findOne({
      where:{charID:charID},
      order:[['noteOrder', 'DESC']]
    }).then(nextNum => {
      let nexNumVal = nextNum.dataValues 
      return nexNumVal;
    }).catch(err => {
      console.log("err",err)
    });    
    
    const newNote = await db.CharNotes.create({
        noteTitle: note, 
        noteOrder: lastOrder === null ? 1 : lastOrder.noteOrder + 1, 
        charID: charID})
      .then(arg => {
        let newCharNote = arg.dataValues;
        return newCharNote
      })
      .catch(err => {
        return err
      });
      res.json(newNote);
    },
  

}