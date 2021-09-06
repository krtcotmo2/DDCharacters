const router = require("express").Router();
const partyController = require("../../controllers/partyController");

router.route("/all").get(partyController.getParties);

router.route("/:partyID").get(partyController.getParty);

router.route("/updateHP").post(partyController.updateHP);

module.exports = router;