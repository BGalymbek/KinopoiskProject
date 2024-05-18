const isAuth = (req, res , next) =>{
    if(req.user){
        next()
    }else{
        res.status(401).send('Unauthorized with Admin account')
    }
}

const isAdmin = (req, res, next)=>{
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(403).send('Access forbiden')
    }
}

module.exports = {isAuth, isAdmin}