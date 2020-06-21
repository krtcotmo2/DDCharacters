const router = require("express").Router();
const apiRoutes = require("./api");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// API Routes
router.use("/api", apiRoutes);

module.exports = router;