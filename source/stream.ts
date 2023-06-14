const app = require("./app");
const {Server} = require("socket.io");
const http = require("http");

const httpServer = new http.Server(app);
const socketServer = new Server(httpServer);

socketServer.on("connection",(socket:any) => {
    console.log("a user connected",socket);
})

export {httpServer,socketServer};