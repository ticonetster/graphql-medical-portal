const path = require('path');
const http = require("http");
const express = require('express');
const routes = require('./controllers');
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const { ApolloServer } = require('apollo-server-express');

const db = require("./config/connection");
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;
const app = express();
const serverApollo = new ApolloServer({
  typeDefs,
  resolvers
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));



//HERE ON IS SOCKET.IO
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

const server = http.createServer(app);
const io = socketio(server);
const botName = "Medical Portal Chat Bot";

// Run when client connects
io.on("connection", (socket) => {
  console.log(io.of("/").adapter);
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);
    // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to Medical Portal Chat Support!"));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });
  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );
      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});
//END SOCKET.IO

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const startApolloServer = async (typeDefs, resolvers) => {
  await serverApollo.start();
};

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

startApolloServer(typeDefs, resolvers);