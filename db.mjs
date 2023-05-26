const app = require("./server.js")
const mongoClient = require("mongodb").MongoClient

//import ReviewsDAO from "./dao/ReviewsDAO"


const port = 8000

mongoClient.connect(
    uri,
    {
        maxPoolSize:50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
).catch(err => {                    // connection il error undakil "catch" work avum
    console.error(err.stack)
    process.exit(1)
}
).then(async client => {            // connection ayi kayinal enth sambavikanam ennan "then" il ullath
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})
