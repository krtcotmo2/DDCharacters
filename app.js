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
const socketIO = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:4200',
    credentials: true
  }
});
const io = socketIO.listen(3001);

app.use(cors( {
  origin: 'http://localhost:4200',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static("client/dist/character"));
app.use('/', indexRouter);


// Serve up static assets (usually on heroku)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "character", "index.html"));
});

io.sockets.on('connection', (socket) => {
  
    console.log(`Socket ${socket.id} has connected`);
     

    socket.on('UPDATE', (newChar) => {
      console.log(newChar)
      io.sockets.emit('update', {currentMember: {...newChar}, type: 'UPDATE'});
    })
});



db.sequelize.sync().then(function() {
  server.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
module.exports = app;