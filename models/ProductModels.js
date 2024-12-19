const mongoose=require("mongoose")

const productschema=mongoose.Schema(
    {
        name:{
            type: String,
            required:[true, "Name is required"],
        },
        quantity:{
            type: Number,
            required:[true, "quantity is required"],
        },
        price:{
            type: Number,
            required:[true, "Price is required"],
        },
        image:{
            type:String,
            required:false
        }
    },
    {
        Timestamp:true
    }
)

const Product=mongoose.model("Product",productschema);

module.exports=Product;