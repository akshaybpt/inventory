const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const router = express();
const User = require('../model/User');
const Product = require('../model/Product');
const { body, validationResult } = require('express-validator');
const upload = require('../middleware/upload');
require('dotenv').config();


// get product Get /api/product/getproduct
router.get('/getproduct', fetchUser, async (req, res) => {

    try {
        const product = await Product.find({ user: req.user.id });
        res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

});

// add new product Post /api/product/addproduct

router.post('/addproduct', fetchUser, upload.single('photo'), async (req, res, next) => {
    try {
        const { name, category, sku, sellPrice, description, buyPrice, quantity } = req.body; // photo added after (personnal use)
        const url = req.protocol + '://' + req.get('host');

        const product = await new Product({
            name, sku, category, sellPrice, buyPrice,description, quantity, photo: url + '/public/' + req.file.filename, user: req.user.id
        })
        const newProduct = await product.save();
        let sucess = true;
        res.json({ sucess,newProduct });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});
// route 3 update the details of a product PATCH  /api/product/updateproduct login required
router.patch('/updateproduct/:id', fetchUser, upload.single('photo'), async (req, res) => {
    try {
        // find the product to be updated and update it 
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send("not found");// product does not exist
        }
        if (product.user.toString() !== req.user.id) {
            return res.status(404).send("not found");// if user id is diiffernrt  user is trying to acess other user products
        }

        const { name, category, sku, sellPrice,description, buyPrice, quantity } = req.body;
        // const newProduct = ({});
        const url = req.protocol + '://' + req.get('host')
     // if user doesnt eant to change the img
        try {
            if(req.file.filename){
                const  photo = url + '/public/' + req.file.filename;
                if (photo) {
                    product.photo = photo;
                }
            }
            
        } catch (error) {
            //console.error("image is not selected");
        //res.status(500).send("Internal Server Error");
            
        }
        finally{
        if (name) {
            product.name = name;
        }
        if (category) {
            product.category = category;
        }
        if (sku) {
            product.sku = sku;
        }
        if (sellPrice) {
            product.sellPrice = sellPrice;
        }
        if (buyPrice) {
            product.buyPrice = buyPrice;
        }
        if (quantity) {
            product.quantity = quantity;
        }
        
        if (description) {
            product.description = description;
        }

        let newproduct = await product.save();
        newproduct =  await Product.findById(req.params.id);
       let sucess = true;
        res.json({sucess,newproduct});
    }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

// Route 4: delete a   product f a user put: '/api/product/deleteproduct/:id' . Login required

router.delete('/deleteproduct/:id', fetchUser, async (req, res) => {

    try {

        // find the product to be deleted and delete it 
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send("not found");// product does not exist
        }
        if (product.user.toString() !== req.user.id) {
            return res.status(404).send("not found");// if user id is diiffernrt  user is trying to acess other user products
        }

        product = await Product.findByIdAndDelete(req.params.id);
        res.json({ "Sucess": "product has been deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

// route 5 get details for a specific details 
router.get('/productdetails/:id', fetchUser, async (req, res) => {
    try {
        // find the product to be shown  
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send("not found");// product does not exist
        }
        if (product.user.toString() !== req.user.id) {
            return res.status(404).send("not found");// if user id is diiffernrt  user is trying to acess other user products
        }

        product = await Product.findById(req.params.id).select("-user")
        res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});
module.exports = router;