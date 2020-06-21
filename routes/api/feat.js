const router = require("express").Router();
const featController = require("../../controllers/featController");

router.route("/all").post(featController.getAllFeats);

router.route("/addFeat").post(featController.addAFeat);

//deleteFeat
router.delete('/delete/:id', featController.deleteFeat);

module.exports = router;