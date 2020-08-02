const router = require("express").Router();
const noteController = require("../../controllers/noteController");

//route for api/notes/getCharNotes
router.route("/getCharNotes/:id").get(noteController.getCharNotes);

//route for api/notes/getNoteItems
router.route("/getNoteItems/:id").get(noteController.getNoteItems);

//route for api/notes/getNoteItems
router.route("/insertNoteHeader/").post(noteController.insertNoteHeader);

//route for api/notes/getNoteItems
router.route("/insertNoteItem").post(noteController.insertNoteItem);

//route for api/notes/updateNote
router.route("/updateNote").post(noteController.updatNote);

//route for api/notes/updateNoteItem
router.route("/updateNoteItem").post(noteController.updateNoteItem);

//route for api/notes/deleteNote
router.route("/deleteNote/:id").post(noteController.deleteNote);

//route for api/notes/deleteNoteItem
router.route("/deleteNoteItem/:id").post(noteController.deleteNoteItem);

module.exports = router;