const router = require("express").Router();
const userController = require("../../controllers/userController");

// loginUser matches with "/api/login"
router.route("/").post(userController.loginUser);

// loginUser matches with "/api/login/resetPassword"
router.route("/resetPassword").post(userController.resetPassword);

// loginUser matches with "/api/login/insertUser"
router.route("/insertUser").post(userController.insertUser);
module.exports = router;
