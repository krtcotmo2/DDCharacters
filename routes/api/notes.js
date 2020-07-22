const router = require("express").Router();
const noteController = require("../../controllers/noteController");

//route for api/notes/getCharNotes
router.route("/getCharNotes/:id").get(noteController.getCharNotes);

//route for api/notes/getNoteItems
router.route("/getNoteItems/:id").get(noteController.getNoteItems);

//route for api/notes/getNoteItems
router.route("/insertNoteHeader/").post(noteController.insertNoteHeader);

module.exports = router;