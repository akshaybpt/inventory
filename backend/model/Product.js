const mongoose = require('mongoose');
const mongooseSerial = require("mongoose-serial")
const { Schema } = mongoose;

const produtScheema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,  // kind of simmler to the forigen key
        ref: 'user'
    },
    serialNumber: String,
    name: {
        type: String,
        requrid: true,
    },
    sku: {
        type: String,
        default: 'squsajasjh',
    },
    description: {
        type: String,
        default: 'squsajasjh',
    },
    category: {
        type: String,
        requrid: true,
    },
    photo: {
        type: String,
        default: 'cjsbdcygsdbcjsd',
    },
    buyPrice: {
        type: Number,
        default: 0,
        requrid: true,
    },
    sellPrice: {
        type: Number,
        default: '0',
        requrid: true,
    },
    quantity: {
        type: Number,
        default: '0',
        requrid: true,
    },

    date: {
        type: Date,
        default: Date.now(),
    }

});
const Product = mongoose.model('product', produtScheema);
produtScheema.plugin(mongooseSerial, { field:"serialNumber"});
module.exports = Product;