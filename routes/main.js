const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index');
});

const arrPupils = [
    {id:1, name: 'Uliana', sex: 'female', age: 14},
    {id:2, name: 'Kira', sex: 'female', age: 15},
    {id:3, name: 'Anton', sex: 'male', age: 16},
    {id:4, name: 'Evhen', sex: 'male', age: 10},
    {id:5, name: 'Liora', sex: 'female', age: 12},
    {id:6, name: 'Ivan', sex: 'male', age: 18},
    {id:7, name: 'Alex', sex: 'male', age: 16},
    {id:8, name: 'Alisa', sex: 'female', age: 18},
    {id:9, name: 'Karina', sex: 'female', age: 17},
    {id:10, name: 'Vasya', sex: 'male', age: 14},
];

router.get("/class/info", (req, res) => {
    res.json(arrPupils);
});

module.exports = router;