const router = require("express").Router();
const userController = require("../../controllers/userController");

// loginUser matches with "/api/login"
router.route("/").post(userController.loginUser);

module.exports = router;
