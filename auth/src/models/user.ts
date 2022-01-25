const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
}, {
    timestamps: true, toJSON: {
        transform(doc: any, ret: any) {
            ret.id = ret._id
            delete ret._id;
            delete ret.password;
        },
        virtuals: true,
        versionKey: false
    }
});


userSchema.methods.comparePassword = function (password: any) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
