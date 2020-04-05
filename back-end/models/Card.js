const mongoose =require('mongoose');
const {Types}=require('mongoose');
const Schema = mongoose.Schema;

const CardSchema =new Schema({
    title:{
    type: String,
    required:true,
    unique: true
},
    description:{
    type: String,
    required:true,
    unique: true
},
    theme:{
        type: String,
        required:true
    },
    owner:{
    type: Types.ObjectId,
        ref:'user'
    }
});

module.exports = CardSc = mongoose.model('card', CardSchema);