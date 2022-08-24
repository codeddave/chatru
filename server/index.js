const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");
const router = require("./router");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

const server = http.createServer(app);

const io = socketio(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  //you could use callback for some error handling
  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);

    const error = true;
    if (error) {
      callback({ error: "error " });
    }
  });

  socket.on("disconnect", () => {
    console.log("user had left");
  });
});
app.use(router);
server.listen(PORT, () => console.log(`server has started on port - ${PORT}`));
