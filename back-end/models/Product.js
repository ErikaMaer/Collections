const {Schema,model,Types} =require('mongoose');


const ProductSchema =new Schema({
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
    owner:{
        type: Types.ObjectId,
        ref:'card'
    }
})

module.exports = model('product', ProductSchema);