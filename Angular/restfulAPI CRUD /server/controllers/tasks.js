const mongoose = require("mongoose");
var Task = mongoose.model("Task");

module.exports = {

    index: (req, res) => {
        Task.find({}, (err, task) => {
            if (err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", task: task});
            }
        })
    },

    details: (req, res) => {
        let id = req.params.id;
        Task.find({_id: id}, (err, task) => {
            if (err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", task: task});
            }
        })
    },

    addTask: (req, res) => {
        Task.create({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        }, (err, task) => {
            if (err) {
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", task: task});
            }
        })
    },

    editTask: (req, res) => {
        let id = req.params.id;
        Task.findById(id, (err, task) => {
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                if(req.body.title){
                    task.title = req.body.title;
                }
                if(req.body.description){
                    task.description = req.body.description;
                }
                if(req.params.completed){
                    task.completed = req.body.completed;
            }
            task.save(err, (err) => {
                if(err){
                    res.json({message: "Error!", error: err});
                }
                else{
                    res.json({message: "Success!", task: task})
                }
            })
            }
        })
    },

    deleteTask: (req, res) => {
        let id = req.params.id;
        Task.remove({_id:id}, (err) => {
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", removed: true});
            }
        })
    }
}