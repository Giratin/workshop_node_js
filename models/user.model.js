const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required : true
    }
}, {
    timestamps: true
});

const User = mongoose.model('user', userSchema);

module.exports = User;
