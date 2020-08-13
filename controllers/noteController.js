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
        nexNumVal = nextNum.dataValues;
      } 
      return nexNumVal;
    }).catch(err => {
      console.log("err",err)
    });    
    
    const newNote = await db.CharNotes.create({
        noteTitle: note,         
        noteOrder: lastOrder < 2 ? 1 : lastOrder.noteOrder + 1, 
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
  
  updatNote: async function (req, res){
    const note = req.body.note;
    const noteID = req.body.noteID;
    
    const theNote = await db.CharNotes.update({noteTitle:note},{
        where:{noteID:noteID}
      }).then(nextNum => {
        let newVal =  db.CharNotes.findOne({
          where:{'noteID':noteID}
        }).then(charNote => {
          return charNote;
        })
        return newVal;
      }).catch(err => {
        console.log("err",err)
      });            
      res.json(theNote);
  },

  deleteNote: async function(req, res){
    const retVal =  await db.CharNotes.destroy({
      where:{noteID:req.params.id}
    }).then(arg => {
    return arg
    });
    res.json({'results': retVal});
  },

  insertNoteItem: async function (req, res){
    const itemDetails = req.body.itemDetails;
    const noteID = req.body.noteID;
    const lastOrder = await db.NoteItems.findOne({
      where:{noteID: noteID},
      order:[
        ['itemOrder', 'DESC']
      ]
    }).then(nextNum => {
      let nexNumVal = !nextNum ? null : nextNum.dataValues
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

  updateNoteItem: async function (req, res){
    const note = req.body.note;
    const id = req.body.id;
    const theNote = await db.NoteItems.update({itemDetails:note},{
        where:{id:id}
      }).then(nextNum => {
        let newVal =  db.NoteItems.findOne({
          where:{'id':id}
        }).then(charNote => {
          return charNote;
        })
        return newVal;
      }).catch(err => {
        console.log("err",err)
      });    
      res.json(theNote);
  },
  
  deleteNoteItem: async function(req, res){
    const retVal =  await db.NoteItems.destroy({
      where:{id:req.params.id}
    }).then(arg => {
    return arg
    });
    res.json({'results': retVal});
  },

  reorderNoteHeader: async function(req, res){
    let allUpdates = req.body.updates;
    let numUpdated = 0;
    allUpdates.forEach(async function(item){
      const theNote = await db.CharNotes.update({noteOrder:item.noteOrder},{
        where:{noteID:item.noteID}
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

  reorderNoteItem: async function(req, res){
    let allUpdates = req.body.updates;
    let numUpdated = 0;
    allUpdates.forEach(async function(item){
      const theNote = await db.NoteItems.update({itemOrder:item.itemOrder},{
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
  }

}