/**
 * User Model
 * https://mongoosejs.com/docs/guide.html#models
 */

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

authorSchema.methods.setPassword = function (newPassword, cb) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newPassword, salt, (err, hash) => {
            if (err) {
                cb(err);
            } else {
                this.password = hash;
                cb();
            }
        });
    });
};

authorSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = Author = mongoose.model("Author", authorSchema);
