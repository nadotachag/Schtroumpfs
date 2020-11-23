const mongoose = require('mongoose');

var Admin = mongoose.model('Admin', {
    username: { type: String },
    password: { type: String }
});

module.exports = { Admin };