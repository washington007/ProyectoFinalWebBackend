
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Teamschema = new Schema({

    _idUser : {
        type : Schema.ObjectId,
        ref : 'User',
    },
    date : {
        type : String, 
        required : true,
    },
    bonus : {
        type : Number,
        required : true
    },
    status : {
        type : String ,
        required: true
    }
}, {
    timestamps : true
}) 

module.exports = mongoose.model('Teams' , Teamschema)