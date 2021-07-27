const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema(
    {
        username : {
            type : String,
            default : true
        },
        
        admin : {
            type : Boolean,
            default : false
        },

        firstname : {
            type : String,
            default : ''
        },

        middlename : {
            type : String,
            default : ''
        },

        lastname : {
            type : String,
            default : ''
        },

        birthday : {
            type : Date,
            default : ''
        },

        location : { 
            city : {
                type : String,
                default : ''
            },
    
            country : {
                type : String,
                default : ''
            },
    
            area : {
                type : String,
                default : ''
            }
        }
    }
);

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);