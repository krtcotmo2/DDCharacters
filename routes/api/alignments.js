
const router = require("express").Router();
const bodyParser = require('body-parser').json();
const characterController = require("../../controllers/characterCotroller");

//get Alignments
//route for /api/characters/alignments
router.route("/").get(characterController.getAllAlignments);

module.exports = router;
