const router = require("express").Router();
const spellController = require("../../controllers/spellController");

//route for spells/getAllSpells
router.route("/getAllSpells").get(spellController.getAllSpells);

router.route("/togglespell").post(spellController.toggleSpell)

module.exports = router;