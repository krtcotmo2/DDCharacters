const router = require("express").Router();
const classController = require("../../controllers/classController");

router.route("/all").get(classController.getClasses);

module.exports = router;