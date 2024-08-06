const express = require('express');
const {
    getToDo,
    createToDo
} = require('../controller/todoController');

const router = express.Router();

router.get('/todolist', getToDo);
router.post('/todo', createToDo);

module.exports = {router};
