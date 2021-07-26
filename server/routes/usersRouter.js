const express = require('express');
const router = express.Router();
const User = require('../models/users');
const passport = require('passport');
const authenticate = require('../authenticate');
const cors = require('./cors');

router.options('*', cors.corsWithOptions, (req, res) => { res.sendStatus(200)});

router.get('/', (req, res, next) => {
    try{
        let users = await User.find({});

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
    }
    catch(err){
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json')
        res.json({err : err});
    }
});

module.exports = router;
