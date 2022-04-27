const express = require('express')
const db = require('../db/index')

const register_router = express.Router()
module.exports = register_router

register_router.use(express.json());

register_router.post('/', (req, res, next) =>{
    const { username, email, password, account_type } = req.body

    db.query('INSERT INTO accounts (username, email, password, account_type) VALUES ($1, $2, $3, $4)', [username, email, password, account_type], (err, result) =>{
        if(err){
            return next(err)
        }
        res.status(201).send({username, email, password, account_type})
    })
})

register_router.put('/update', (req, res, next) =>{
    const { newPassword, newUsername, username } = req.body

    db.query('UPDATE accounts SET password = $1, username = $2 WHERE username = $3', [newPassword, newUsername, username],(err, result) =>{
        if(err){
            return next(err)
        }
        res.status(204).send()
    })
})

register_router.delete('/delete', (req, res, next) =>{
    const { username } = req.body

    db.query('DELETE FROM accounts WHERE username = $1', [username], (err, result) =>{
        if(err){
            return next(err)
        }
        res.status(204).send()
    })
})