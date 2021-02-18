function logger(req, res, next){
console.log(`[Logger]: requesting to ${req.method} ${req.url}`)
next()
}

module.exports = logger