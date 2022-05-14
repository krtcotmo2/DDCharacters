const router = require("express").Router();
const expendablesController = require("../../controllers/expendablesController");

//route for spells/getAllSpells
router.route("/get/:id").get(expendablesController.getEpendables);

router.route("/add").post(expendablesController.insertExpendable);

router.route("/delete/:id").delete(expendablesController.deleteExpendable);

router.route("/update").post(expendablesController.updateExpendable);

module.exports = router;