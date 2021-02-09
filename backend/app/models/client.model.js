const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({

    lastname:String,
    firstname: String,
    phone:String,
    email: String,
    address:{
        street:String,
        city:String,
        Zip:String,
        country: String,
        lat:Number,
        lng:Number,
  
    },
    status:{
        id:Number,
        label:String,

    },

    
    


   
});

module.exports = mongoose.model('client', ClientSchema);
