const router = require("express").Router();
const skillController = require("../../controllers/spellController");

//route for spells/getAllSpells
router.route("/getAllSpells").get(skillController.getAllSpells);

module.exports = router;