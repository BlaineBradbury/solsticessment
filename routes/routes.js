const cusRoute = require("./customers")
const acctRoute = require("./accounts")

const appRouter = (server, fs, cors) => {

    server.get("/", cors, (req, res) => {
        res.send("welcome to the development api-server")
    })

    cusRoute(server, fs, cors)
    acctRoute(server, fs, cors)

}

module.exports = appRouter
