const Rate = require('./Rates')

const saveRate = async (req, res) =>{
    await new Rate({
        rate: req.body.rate,
        text: req.body.text,
        authorId: req.body.authorId,
        filmId: req.body.filmId,
        date: Date.now()
    }).save()
    res.status(200).send(true)
}

module.exports = {saveRate}