const http = require('http')

const app = require('../app')

const PORT = process.env.PORT
const logMsg = `\n  >> Server listening to port ${PORT}\n`
const logFun = () => console.log(logMsg)

const server = http.createServer(app)

server.listen(PORT, logFun)
