import express from 'express'
//import addUser from './middleware/addUser.js'
import validAge from './middleware/validAge.js'
import validGroup from './middleware/validGroup.js'
import validObject from './middleware/validObject.js'
import sanitizedUser from './middleware/sanitize.js'

const app = express()
app.use(express.json())


app.get("/", (req, res, next)=> {
    res.send("Hey gurl!")
    
})

app.post("/validateUser", validAge, validGroup, validObject, (req, res, next )=> {
    res.send("This is a valid user")
})

app.post("/sanitizeUser", sanitizedUser, (req, res, next)=> {
    res.send(req.body)
})

app.use((err, req, res, next)=> {
    console.log(err.message)
})

app.listen(3000, ()=> console.log("I'm dancing at http://localhost:3000"))

