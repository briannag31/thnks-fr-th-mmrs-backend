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
})


module.exports = mongoose.model("Memory", memorySchema)

