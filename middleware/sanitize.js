const sanitizedUser = (req, res, next) => {
    
    req.body.firstName[0].toUpperCase() + req.body.firstName.substring(1)
    req.body.lastName[0].toUpperCase() + req.body.firstName.substring(1)
   

    req.body.favoriteBands.sort()
    next()
}

export default sanitizedUser