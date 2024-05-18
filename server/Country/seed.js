const Country = require('./Country')
const data = [
    'Россия',
    'СССР',
    'США',
    'Казахстан',
    'Франция',
    'Южная Корея',
    'Великобритания',
    'Япония',
    'Италия',
    'Испания',
    'Германия',
    'Турция',
    'Швеция',
    'Дания',
    'Норвегия',
    'Гонконг'
]

async function writeDataCountry (){
    const length = await Country.countDocuments();
    if(length == 0){
        data.map((item, index)=>{
            new Country({
                name: item,
                key: index
            }).save() 
        })
    }
    console.log("Country length: " + length);
}

module.exports = writeDataCountry