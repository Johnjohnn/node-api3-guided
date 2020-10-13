const express = require("express")
const morgan = require("morgan")                     // importing the npm install morgan add we just installed . 
const welcomeRouter = require("./welcome/welcome-router")
const usersRouter = require("./users/users-router")

const server = express()
const port = 4000

server.use(express.json())
server.use(morgan("combined"))

server.use(welcomeRouter)
server.use(usersRouter)

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
