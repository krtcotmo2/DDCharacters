const router = require("express").Router();


const loginRoutes = require("./login");
const raceRoutes = require("./races");
const charRoutes = require("./characters");
const classRoutes = require("./charClass");
const statRoutes = require("./stats");
const featRoutes = require("./feat");
const toHitRoutes = require("./toHit");
const skillRoutes = require("./skill");
const noteRoutes = require("./notes");
const spellRoutes = require("./spells");
const alignments = require('./alignments');
const parties = require('./parties');

router.use("/login", loginRoutes);
router.use("/races", raceRoutes);
router.use("/characters", charRoutes);
router.use("/classes", classRoutes);
router.use("/stats", statRoutes);
router.use("/feats", featRoutes);
router.use("/newToHit", toHitRoutes);
router.use("/skills", skillRoutes);
router.use("/notes", noteRoutes);
router.use("/spells", spellRoutes);
router.use("/alignments", alignments);
router.use("/party", parties);

module.exports = router;