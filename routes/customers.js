const cusRoute = (app, fs, cors) => {
    const customers = "./data/customers.json"

    app.get("/customers", cors, (req, res) => {
        fs.readFile(customers, 'utf8', (err, jsonString) => {
            if (err) {
                throw err
            } else {
                res.send(JSON.parse(jsonString))
            }
        })
    })
}

module.exports = cusRoute
