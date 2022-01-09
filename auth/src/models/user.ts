const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
}, {timestamps: true, toJSON: {virtuals: true}});


userSchema.methods.comparePassword = function (password: any) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
