const router = require("express").Router();
const statController = require("../../controllers/statController");

router.route('/:id')
  .get(statController.statsByID);

  module.exports = router;