const express = require('express');
const router = express.Router({ mergeParams:true });
const productModel = require('../schema/schema').productModel;
const hotDealsModel = require('../schema/schema').hotDealsModel;
const newArrivals = require('../schema/schema').newArrivalsModel;
const popularProducts = require('../schema/schema').popularProductModel;

router.get('/', async (req, res) => {
    const { category } = req.params;

    console.log(category);

    switch(category){
        case 'hot-deals':
            try {
                await hotDealsModel.find({}).then(result => res.json({ status: 'success', data: result })).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'new-arrivals':
            try {
                await newArrivals.find({}).then(result => res.json({ status: 'success', data: result })).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'popular-products':
            try {
                await popularProducts.find({}).then(result => res.json({ status: 'success', data: result })).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'all-products':
            try {
                await productModel.find({}).then(result => res.json({ status: 'success', data: result })).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Ready Stock':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Ready Stock'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Electronics Devices':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Electronics Devices'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Earphone and Gadget':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Earphone and Gadget'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Electric Trimmer':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Electric Trimmer'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Gents Fashion':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Gents Fashion'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Health and Fitness':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Health and Fitness'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Ladies Fashion':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Ladies Fashion'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Cosmetics':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Cosmetics'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Skin Care':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Skin Care'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Couple Set':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Couple Set'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Kids Section':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Kids Section'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Winter Fashion':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Winter Fashion'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Bedding and Bath':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Bedding and Bath'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Gents Accessories':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Gents Accessories'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Beauty Tools':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Beauty Tools'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Computer Accessories':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Computer Accessories'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Gift Items':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Gift Items'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Valentine Special':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Valentine Special'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Eid Collection Gents':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Eid Collection Gents'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Eid Collection Ladies':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Eid Collection Ladies'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        case 'Home and Kitchen':
            try {
                await productModel.find({}).then(result => {
                    if (result.length){
                        const filteredData = [];
                        for (let i=0; i<result.length; i++){
                            if (result[i].category === 'Electronics Devices'){
                                filteredData.push(result[i]);
                            }
                        }
                        return res.json({ status: 'success', data: filteredData })
                    }
                    else {
                        return res.json({ status: 'not found' })
                    }
                }).catch(err => res.json({ status: 'failed' }))
            } catch (error) {
                res.status(500);
            }
            break;

        default:
            return res.json({ status: 'invalid request' });
    }
})

module.exports = router;
