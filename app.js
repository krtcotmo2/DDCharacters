const express = require('express');
const app = express();
const PORT = process.env.PORT || 4200;
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const db = require("./models");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static("client/dist/character"));
app.use('/', indexRouter);


// Serve up static assets (usually on heroku)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "character", "index.html"));
});


db.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
module.exports = app;