const Genres = require('./Genres')
const data = [
    'Комедии',
    'Мультфильмы',
    'Ужасы',
    'Фантастика',
    'Триллеры',
    'Боевики',
    'Мелодрамы',
    'Детективы',
    'Приключения',
    'Фэнтэзи'
]

async function writeDataGenre (){
    const length = await Genres.countDocuments();
    if(length == 0){
        data.map((item, index)=>{
            new Genres({
                name: item,
                key: index
            }).save() 
        })
    }
    console.log(length);
}

module.exports = writeDataGenre