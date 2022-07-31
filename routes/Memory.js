
const express = require('express');
const req = require('express/lib/request');
const router = express.Router()
const memoryController = require("../controllers/Memory")
const Memory = require("../models/Memory")


//iduces

// index of api
router.get("/", memoryController.index);

// seed memory
router.get("/seed", memoryController.seed);

// get memories
router.get("/memories", memoryController.all);

// delete memory 
router.delete("/memories/:id", memoryController.remove);

// update memory 
router.put("/memories/:id", memoryController.update);

// create memory
router.post("/memories", memoryController.create);

// show memory by id
router.get("/memories/:id", memoryController.show)


module.exports = router
