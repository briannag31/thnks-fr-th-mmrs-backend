const mongoose = require('mongoose')
const Memory = require("../models/Memory");
const memorySeedData = require("../models/memorySeedData")

module.exports = {
  index,
  seed,
  all,
  remove,
  update,
  create,
  show,
};

// index
function index(req, res) {
  res.json({message:"you are home"});
}

// seed
async function seed(req, res) {
    try {
        Memory.deleteMany({}, (err, deletedItems) => {
            Memory.create(memorySeedData, (err, data) => {
                res.json(data);
            });
        });
    } catch (error) {
        res.json(error)
    }
}

// all
async function all(req, res){
    try {
      res.json(await Memory.find({}));
    } catch (error) {
      res.status(400).json(error);
    }
}

// remove
async function remove(req, res){
    try {
      res.json(await Memory.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
}

// update
async function update(req, res){
    try {
      res.json(
        await Memory.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      res.status(400).json(error);
    }
}

//create
async function create(req, res){
    try {
      res.json(await Memory.create(req.body));
    } catch (error) {
      res.status(400).json(error);
    }
}

// show by id
async function show(req, res){
    try {
      res.json(await Memory.findById(req.params.id));
    } catch (error) {
      res.json(error);
    }
};