const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema(
    {
        username : {
            type : String,
            required : true
        },
        
        admin : {
            type : Boolean,
            default : false
        },

        firstname : {
            type : String,
            required : true
        },

        middlename : {
            type : String,
            required : true
        },

        lastname : {
            type : String,
            required : true
        },

        birthday : {
            type : Date,
            required : true
        },

        location : {
            type : String,
            required : true
        }
    }
);

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);