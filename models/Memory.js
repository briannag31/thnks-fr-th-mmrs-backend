const mongoose = require("mongoose")



const memorySchema = new mongoose.Schema({
  
    description:{
        type: String,
        required: false,
    },
    image:{
        type: String,
        required: true,
    },
    grouping:{
        type: Array,
        required: false,
    },
})


module.exports = mongoose.model("Memory", memorySchema)

