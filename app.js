const http = require('http');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4200;
const path = require('path');
const server = http.createServer(app);
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const db = require("./models");
const cors = require('cors');
const { insertNoteItem } = require('./controllers/noteController');

const io = require('socket.io')(server, {
    cors: {
      origins: process.env.socketURL ? process.env.socketURL : 'https://localhost:4200',
      credentials: true,
      methods: ["GET", "POST"],
    }
  });
db.sequelize.sync().then(function() {

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  app.use(express.static("client/dist/character"));
  app.use('/', indexRouter);


  // Serve up static assets (usually on heroku)
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "character", "index.html"));
  });

  io.on('connection', (socket) => {
    socket.on('HPUPDATE', (newChar) => {
      io.sockets.emit('hpUupdate', {...newChar, type: 'HPUPDATE'});
    })
    socket.on('SPELLUPDATE', (spellData) => {
      io.sockets.emit('spellUpdate', {...spellData, type: 'SPELLUPDATE'});
    }) 
    socket.on('ADDSPELL', (spellData) => {
      io.sockets.emit('addSpell', {...spellData, type: 'ADDSPELL'});
    })
    socket.on('DELETESPELL', (spellData) => {
      io.sockets.emit('deleteSpell', {...spellData, type: 'DELETESPELL'});
    })
    socket.on('CHANGESPELL', (spellData) => {
      io.sockets.emit('changeSpell', {...spellData, type: 'CHANGESPELL'});
    })
    socket.on('UPDATEEXPENDABLE', (expendable) => {
      io.sockets.emit('updateExpendable', {...expendable, type: 'UPDATEEXPENDABLE'});
    })
  });

  server.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
module.exports = app;
