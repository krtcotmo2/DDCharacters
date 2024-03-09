const router = require("express").Router();
const userController = require("../../controllers/userController");

// loginUser matches with "/api/login"
router.route("/").post(userController.loginUser);

// resetPassword matches with "/api/login/resetPassword"
router.route("/resetPassword").post(userController.resetPassword);

// add new user matches with "/api/login/insertUser"
router.route("/insertUser").post(userController.insertUser);

// resets password and sends email matches with "/api/login/newPassword"
router.route("/newPassword").post(userController.newPassword);

// check status  "/api/login/user-status"
router.route("/user-status").post(userController.isLoggedIn);

// check status  "/api/login/sign-out"
router.route("/sign-out").post(userController.logOut);

module.exports = router;
