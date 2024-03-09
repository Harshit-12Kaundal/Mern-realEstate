import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            requied:true, 
        },
        description:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        regularPrice:{
            type:Number,
            requied:true,
        },
        discountedPrice:{
            type:Number,
            requied:true,
        },
        bathrooms:{
            type:Number,
            requied:true,
        },
        bedrooms:{
            type:Number,
            requied:true,
        },
        furnished:{
            type:Boolean,
            requied:true,
        },
        parking:{
            type:Boolean,
            required:true,
        },
        type:{
            type:String,
            required:true,
        },
        offer:{
            type:Boolean,
            required:true,
        },
        imageUrls:{
            type:Array,
            requied:true,
        },
        userRef:{
            type:String,
            required:true,
        },
    },{timestamps:true}
)

const Listing =mongoose.model('Listing', listingSchema);

export default Listing;

