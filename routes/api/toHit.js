const router = require("express").Router();
const bodyParser = require('body-parser').json();
const hitController = require("../../controllers/hitController");

//Insert tohit
router.post('/', bodyParser, hitController.createUpdateHits);

//Reorder ToHits
router.put('/reorderToHits', bodyParser, hitController.reorderToHits);

module.exports = router;