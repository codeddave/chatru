const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
const router = require("./router");
const { addUser, getUser } = require("./users");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

const server = http.createServer(app);

const io = socketio(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  //you could use callback for some error handling
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) {
      return callback(error);
    }
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to the room - ${user.room}`,
    });
    // let everyone know that a user has joined, alers all users except the user who joined
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    socket.join(user.room);
    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    console.log(message, "here");
    const user = getUser(socket.id);
    console.log(user);
    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    console.log("user had left");
  });
});
app.use(router);
server.listen(PORT, () => console.log(`server has started on port - ${PORT}`));
