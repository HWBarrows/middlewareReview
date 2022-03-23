const addUser = (req, res, next)=>{
    req.user = {
        "firstName" : "Furaha",
        "lastName" : "Mustermann",
        "age": "129",
        "fbw": "E07",
        "profession" : "Musician",
        "favoriteBands" : ["Radiohead", "Motorhead", "Machinehead", "The talking heads" ],
        "email" : "furaha@example.org"
    }
    next()
}

export default addUser