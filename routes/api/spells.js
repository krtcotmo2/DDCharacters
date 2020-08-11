const router = require("express").Router();
const spellController = require("../../controllers/spellController");

//route for spells/getAllSpells
router.route("/getAllSpells/:id").get(spellController.getAllSpells);

router.route("/togglespell").post(spellController.toggleSpell);

router.route("/addASpell").post(spellController.addASpell);

router.route("/deleteASpell/:id").delete(spellController.deleteASpell);

router.route("/updateASpell").post(spellController.updateASpell);

module.exports = router;