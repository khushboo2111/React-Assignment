const mongoose = require('mongoose')

const ConnectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MongoURL)
        console.log('Connected to database : '+ mongoose.connection.host)
    } catch(err){
        console.log(err)
    }
}
module.exports = ConnectDb