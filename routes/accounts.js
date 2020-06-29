const acctRoute = (app, fs, cors) => {
    const accounts = "./data/accounts.json"

    app.get("/accounts", cors, (req, res) => {
        fs.readFile(accounts, 'utf8', (err, jsonString) => {
            if (err) {
                throw err
            } else {
                res.send(JSON.parse(jsonString))
            }
        })
    })
}

module.exports = acctRoute
