
const http = require("http");
const app = require("./app");
const connectDB = require("./src/config/db");
const { Server } = require("socket.io");

// Load cron jobs
const startcron = require("./src/cron/cronJobs");


connectDB();
const PORT = 9000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});
app.set("io", io);

startcron(io);

const { setIO } = require("./src/socket");
setIO(io);

// This is for socket.io
io.on("connection", (socket) => {
  console.log("⚡ Frontend connected:", socket.id);

  // Connection of single pole
  socket.on("join-pole", (pole_id) => {
    socket.join(pole_id);
    console.log(`📍 ${socket.id} joined pole ${pole_id}`);
  });

  // Connection of Poles : (from frontend)
  socket.on("join-multiple-poles", (poles) => {
    poles.forEach((pole_id) => {
      socket.join(pole_id);
      console.log(`📍 ${socket.id} joined pole ${pole_id}`);
    });
  });

  socket.on("disconnect", () => {
    console.log("Frontend disconnected:", socket.id);
  });
});

console.log("sending request to app.js");

server.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
