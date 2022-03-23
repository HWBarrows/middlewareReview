const validObject = (req, res, next) =>{
    if (req.body.firstName && req.body.lastName && req.body.email) {
        next()
    }else{
        res.send("Request could not be processed, please check your information and try again")
    }
}

export default validObject