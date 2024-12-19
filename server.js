const express=require("express");
const app=express();
const Product=require("./models/ProductModels")
const mongoose=require("mongoose")

app.use(express.json()); //middleware

//posting data in database
app.post("/product",async (req,res)=>{
    try {
        const newproduct=await Product.create(req.body)
        res.status(200).json(newproduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//fetching data from the database
app.get("/product",async (req,res)=>{
    try {
        const products=await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//fetching data from the database using the unique id
app.get("/product/:id",async (req,res)=>{
    try {
        const {id}=req.params
        const product=await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//updating the data stored in the database

app.put("/product/:id",async (req,res)=>{
    try {
        const {id}=req.params
        const updateproduct=await Product.findByIdAndUpdate(id,req.body)
        const updatedproduct= await Product.findById(id);
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.delete("/product/:id", async(req,res)=>{
   try {
        const {id}=req.params;
        const deleteproduct=await Product.findByIdAndDelete(id,req.body)
        res.status(200).json(deleteproduct)
   } catch (error) {
         res.status(500).json({message:error.message})
   }
})


mongoose
.connect("mongodb+srv://anmol_codes:123456Anmol@practice.ksy4h.mongodb.net/CRUD_API?retryWrites=true&w=majority&appName=practice")
.then(()=>{
    console.log("Database is connected")
    app.listen(4000,()=>{
        console.log("Hello CRUD API is running on the port 4000")
    })
}).catch((error)=>{
    console.log(error)
})