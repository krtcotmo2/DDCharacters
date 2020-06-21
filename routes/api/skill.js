const router = require("express").Router();
const skillController = require("../../controllers/skillController");

router.route("/all").post(skillController.getAllSkills);

router.route("/addSkill").post(skillController.addASkill);


module.exports = router;