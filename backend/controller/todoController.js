const ToDo = require('../model/todoModel');

exports.getToDo = async(req, res) => {
    try{
        const todo = await ToDo.find();

        res.status(200).json({
            success: true,
            data: todo
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

exports.createToDo = async(req, res) => {
    const {title, description, completed} = req.body;

    try {
        const newToDo  = new ToDo({
            title,
            description,
            completed
        })

        await newToDo.save();

        res.status(201).json({
            success: true,
            data: newToDo
        })
    } catch (err) {
        res.status(401).json({
            success: false,
            message: err.message
        })
    }
}