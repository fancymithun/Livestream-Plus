const { httpServer,socketServer} = require("./stream");
require("dotenv").config()

const PORT = process.env.PORT;

console.log(httpServer);
console.log(socketServer);



httpServer.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
})
