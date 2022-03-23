const validGroup = (req, res, next)=> {
    if(req.body.fbw == "E07") {
        next()
    }else{
        res.send("We can not validate your user. They are not a member of FBW07")
    }
}

export default validGroup