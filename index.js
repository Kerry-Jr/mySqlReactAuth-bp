const express = require('express');
// The filename index is a special name in Node
// If we require a folder in Node and we don't specify a file name
// Node will automatically look for an index.js inside of that folder
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

io.on('connection', socket => {
  console.log("Welcome");
  socket.on('message', (data) => {
    socket.emit('serverToClientMessage', data);
  });

  socket.on('disconnect', () => {
    console.log("See ya");
    return;
  });
});



if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

require('./services/passport')
// Any route that goes to slash,
// Have the router object inside of routes
// handle the routing for us
app.use(routes);



server.listen(PORT);
