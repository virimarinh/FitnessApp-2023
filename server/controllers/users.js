const express = require('express');
const model = require('../models/users');
const router = express.Router();

router 
    .get('/', (req, res, next) =>{
        model.getAll()
            .then(list => {
                const data = { data: list, total: list.length, isSuccess: true };
                res.send(data)
            }).catch(next);
    })
    .get('/search/:q', (req, res) => {
        const term = req.params.q;
        console.log({ term });
        const list = model.search(term);
        const data = { data: list, total: list.length, isSuccess: true };
        res.send(data)
    })
    .get('/:id', (req, res)=> {
        const id = req.params.id;
        const users = model.getById;
        const data = { 
            data: users, total: 1, isSuccess: true 
        };
        res.send(data)
    })

    .post('/', (req, res) => {
        const user = req.body;

        console.log({ user });
        console.log( req.query );
        console.log( req.params );
        console.log( req.headers );

        model.add(user);
        const data = {
            data: user, isSuccess: true
        };
        res.send(data)
    })

    .patch('/', (req, res) => {
        const user = req.body;
        model.update(user);
        const data = {
            data: user, isSuccess: true
        };
        res.send(data)
    })

    .delete('/:id', (req, res) => {
        const id = req.params.id;
        model.deleteItem(id);
        const data = {
            data: user, isSuccess: true
        };
        res.send(data)
    })

    module.exports = router; 

     /*  Ways to pass information to the server:
    1. Query String Parameters
    2. Route Parameters
    3. Request Body
    4. Request Headers
    5. Cookies
    */