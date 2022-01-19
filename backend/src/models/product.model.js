const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    img1:{type:String,required:true},
    img2:{type:String,required:true},
    name:{type:String,required:true},
    price1:{type:Number,required:true},
    price2:{type:Number,required:true},
    ram:{type:Number,required:true},
    batter:{type:Number,required:true},
},{
    versionKey:false,
    timestamps:true,
})

module.exports = mongoose.model("product",productSchema);