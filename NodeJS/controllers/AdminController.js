const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Admin } = require('../models/Admin');
//login
router.post('/auth', (req, res) => {
    
    Admin.findOne(req.body.username, (err, doc) => {
        Admin.findOne(req.body.password, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Retriving Admin :' + JSON.stringify(err, undefined, 2)); }
        });
    });
});

//inscription
router.post('/inscription', (req, res) => {
    var emp = new Admin({
        username: req.body.username,
        password: req.body.password,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Admin Save :' + JSON.stringify(err, undefined, 2)); }
    });
});