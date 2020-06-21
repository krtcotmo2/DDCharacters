const router = require("express").Router();



// loginUser matches with "/api/login"
router.get("/", (req, res, next) => {
    res.status(200).json({item:'sss'});
  });

module.exports = router;
