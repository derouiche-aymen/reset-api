const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Userschema = new schema ({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true 
    },
    age:{
        type:Number
    }
});

module.exports = contact= mongoose.model('User', Userschema);