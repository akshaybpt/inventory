const mongoose = require('mongoose');
const { Schema } = mongoose;

const tokenSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,  // kind of simmler to the forigen key
        ref: 'user',
        required: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true
    },
    expireAt: {
        type: Date,
        default: Date.now()+30*(60*1000),
        required: true
    }
});
const Token = mongoose.model('token', tokenSchema);

module.exports = Token;