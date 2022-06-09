
const mongoose = require('mongoose')

 const connecMongo=async()=>{
        try {
            mongoose.connect('mongodb://localhost:27017/curricul',{userNewUrlParser:true}, () => {
                console.log('mongoose connected successfuly');
            });
        } catch (error) {
            handleError(error);
        }
    }

    module.exports = connecMongo


    

