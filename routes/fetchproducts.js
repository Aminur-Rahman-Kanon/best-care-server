const express = require('express');
const router = express.Router();
const hotDeals = require('../schema/schema').hotDealsModel;
const popularProduct = require('../schema/schema').popularProductModel;
const newArrival = require('../schema/schema').newArrivalsModel;
const allProduct = require('../schema/schema').productModel;

router.get('/', async (req, res) => {

    try {
        const hotDealsProducts = await hotDeals.find({ }).then(result => result).catch(err => err);
        const popularProducts = await popularProduct.find({ }).then(result => result).catch(err => err);
        const newArrivals = await newArrival.find({ }).then(result => result).catch(err => err);
        const allProducts = await allProduct.find({ }).then(result => result).catch(err => err);
        
        const data = {
            hotDealsProducts, popularProducts, newArrivals, allProducts
        }

        return res.status(200).json({ data });
    } catch (error) {
        return res.status(400).json({ status: 'error' })
    }
})

module.exports = router;
