const db = require("../models");
const CharNotes = require('../models/notes');
const NoteItems = require('../models/noteItem');

module.exports = {
  getCharNotes: async function(req, res){
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
    const noteTitle = await db.CharNotes.findOne({
      where:{noteID:req.params.id},
      order:['noteOrder']
    }).then(vals => {
      return vals.noteTitle;
    })   

    db.NoteItems.findAll({
      where:{noteID: req.params.id},
      order:['itemOrder']
    })
      .then(results => {
        res.status(200).json( {title: noteTitle, results:results} );
      })
      .catch(err =>{
        res.status(500).json({ error:err})
      }
    );
  },

  insertNoteHeader: async function (req, res){
    const note = req.body.note;
    const charID = req.body.charID;
    
    const lastOrder = await db.CharNotes.findOne({
      where:{charID:charID},
      order:[['noteOrder', 'DESC']]
    }).then(nextNum => {
      let nexNumVal = 1;
      if(nextNum){
        console.log(nextNum.dataValues.noteOrder)
        nexNumVal = nextNum.dataValues;
      } 
      return nexNumVal;
    }).catch(err => {
      console.log("err",err)
    });    
    
    const newNote = await db.CharNotes.create({
        noteTitle: note,         
        noteOrder: lastOrder >= 1 ? 1 : lastOrder.noteOrder + 1, 
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
  
  
  
  insertNoteItem: async function (req, res){
    const itemDetails = req.body.itemDetails;
    const noteID = req.body.noteID;
    console.log("req.body",req.body)
    const lastOrder = await db.NoteItems.findOne({
      where:{noteID: noteID},
      order:[
        ['itemOrder', 'DESC']
      ]
    }).then(nextNum => {
      let nexNumVal = !nextNum ? null : nextNum.dataValues 
      console.log("nexNumVal",nexNumVal)
      return nexNumVal;
    }).catch(err => {
      console.log("err",err)
    });    
    
    const newNote = await db.NoteItems.create({
        itemDetails: itemDetails, 
        itemOrder: lastOrder === null ? 1 : lastOrder.itemOrder + 1, 
        noteID: noteID})
      .then(arg => {
        let newNoteItem = arg.dataValues;
        return newNoteItem
      })
      .catch(err => {
        return err
      });
      res.json(newNote);
    },
}