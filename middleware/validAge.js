const validAge = (req, res, next) => {
    //console.log(req.body.age);
    if(Number(req.body.age) > 18){
        next()
    }else{
        res.send("Sorry, too young to play")
    }
}

export default validAge