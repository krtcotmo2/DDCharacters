const router = require("express").Router();
const bodyParser = require('body-parser').json();
const characterController = require("../../controllers/characterCotroller");

//route for /api/characters/all
router.route("/all").get(characterController.getCharacters);

//route for /api/characters/new
router.route("/new").post(characterController.newCharacter);

//route for /api/characters/updateClass
router.route("/updateClass").post(characterController.updateClass);

//route for /api/characters/feats/#
router.route('/feats/:id').get(characterController.getAllFeatsForChar);

//route for /api/characters/skills/#
router.route('/skills/:id').get(characterController.getAllSkillsForChar);

//updateSkill
router.post('/updateSkill', bodyParser, characterController.createUpdateSkill);

//deleteSKill
router.delete('/deleteSkill/:id', bodyParser, characterController.deleteSkill);

//route for /api/characters/saves/#
router.route('/saves/:id').get(characterController.getAllSavesForChar);

//updateSave
router.post('/updateSave', bodyParser, characterController.createUpdateSave);

//deleteSave
router.delete('/deleteSave/:id', bodyParser, characterController.deleteSave);

//updateStat
router.post('/updateStat', bodyParser, characterController.createUpdateStat);

//deleteStat
router.delete('/deleteStat/:id', bodyParser, characterController.deleteStat);

//route for /api/characters/equip/#
router.route('/equip/:id').get(characterController.getAllEquipForChar);

//route for /api/characters/equip/add
router.post('/equip/add', bodyParser, characterController.createEquip );

//route for /api/characters/equip/reorder
router.put('/equip/reorderEquip', bodyParser, characterController.reorder);

//deleteEquip
router.delete('/deleteequip/:id', bodyParser, characterController.deleteEquip);

//route for /api/characters/#
router.route('/:id').get(characterController.getBaseForChar);

//route for /api/characters/toHits/#
router.route('/toHits/:id').get(characterController.getAllToHitsForChar);

//updateHitPoints
router.post('/updateHP', bodyParser, characterController.updateHP);

//updateXP
router.post('/updateXP', bodyParser, characterController.updateXP);

//updateInit
router.post('/updateInit', bodyParser, characterController.updateInit);

//updateToHit
router.post('/updateToHit', bodyParser, characterController.createUpdateToHits);

//deleteToHit
router.delete('/deleteToHit/:id', bodyParser, characterController.deleteToHit);

//route for /api/characters/ac/#
router.route('/ac/:id').get(characterController.getAllACForChar);

//route for /api/characters/acGrps/#
router.route('/acGrps/:id').get(characterController.getAllACGrps);

//route for reordering AC /api/characters/reorderACs
router.put('/reorderACs', bodyParser, characterController.reorderACs);


//updateAC
router.post('/ac', bodyParser, characterController.createUpdateAC);

//deleteAC
router.delete('/deleteAC/:id', bodyParser, characterController.deleteAC);

module.exports = router;
