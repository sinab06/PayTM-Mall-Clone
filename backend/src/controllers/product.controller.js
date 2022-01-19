const express = require("express");

const router = express.Router();

const Product = require("../models/product.model")

router.post("", async (req,res)=>{
  try{
    const product = await Product.create(req.body);
    return res.status(200).send(product)
    }catch(err){
        console.log(err)
        res.status(500).json({message:err.message,status:"Failed"})
    }
    
})


router.get("", async (req,res)=>{

    try{
        const products = await Product.find().lean().exec();
    return res.status(201).send(products)
    }catch(err){
        res.status(500).json({message:err.message,status:"Failed"})
    }
    
})


 

module.exports=router;