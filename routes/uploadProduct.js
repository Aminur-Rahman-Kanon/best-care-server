const express = require('express');
const router = express.Router();
const multer = require('multer');
const firebase = require('firebase/app');
const firebaseConfig = require('../public/firebase/firebase');
const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require('firebase/storage');
const productModel = require('../schema/schema').productModel;
const hotDealsModel = require('../schema/schema').hotDealsModel;
const popularProductModel = require('../schema/schema').popularProductModel;
const newArrivalsModel = require('../schema/schema').newArrivalsModel;


firebase.initializeApp(firebaseConfig);

const storage = getStorage();

const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.array('photo'), async (req, res) => {
    const data = JSON.parse(req.body.data);
    const photos = req.files;
    const totalImgCount = 10 - photos.length;

    await productModel.find({ title: data.title }).then(async result => {
        if (result.length){
            return res.json({status: 'product exist', product: result })
        }
        else {
            //uploading fikes to the firestore storage
            const imgUrl = {};
            for (let i=0; i< photos.length; i++){
                const storageRef = ref(storage, `products/${data.productCategory}/${data.title}/${photos[i].originalname}`);
        
                const metadata = {
                    contentType: 'image/jpeg'
                }
        
                const snapshot = await uploadBytesResumable(storageRef, photos[i].buffer, metadata);
        
                await getDownloadURL(snapshot.ref).then(url => imgUrl[photos[i].originalname] = url);
            }

            if (totalImgCount >= 1){
                for (let i=0; i<totalImgCount; i++){
                    imgUrl[`${data.title}${photos.length + i + 1}`] = null;
                }
            }
        
            data['rating'] = 0;
            data['reviews'] = [];
            data['customerReviews'] = [];
        
            const dataToUpload = {
                category: data.productCategory,
                subCategory: data.productSubCategory,
                stock: data.stock,
                title: data.title,
                rating: data.rating,
                reviews: data.reviews,
                price: data.productPrice,
                img: imgUrl,
                description: data.description,
                customerReviews: data.customerReviews,
            }
        
            switch(data.productSubCategory) {
                case 'Hot Deals':
                    await productModel.create( dataToUpload ).then(async result => {
                        await hotDealsModel.create( dataToUpload ).then(response => res.json({ status: 'success' }))
                        .catch(err => res.status(400).json({ status: 'failed' }))
                    }).catch(err => res.json({ status: 'error' }))
                    break;
        
                case 'New Arrivals':
                    await productModel.create( dataToUpload ).then(async result => {
                        await newArrivalsModel.create( dataToUpload ).then(response => res.json({ status: 'success' }))
                        .catch(err => res.status(400).json({ status: 'failed' }))
                    }).catch(err => res.json({ status: 'error' }))
                    break;
        
                case 'Popular Poroducts':
                    await productModel.create( dataToUpload ).then(async result => {
                        await popularProductModel.create( dataToUpload ).then(response => res.json({ status: 'success' }))
                        .catch(err => res.status(400).json({ status: 'failed' }))
                    }).catch(err => res.json({ status: 'error' }))
                    break;

                case 'None':
                    await productModel.create( dataToUpload ).then(result => res.json({ status: 'success' })).catch(err => res.json({ status: 'failed' }))
                    break;
                    
                default:
                    return res.json({ status: 'invalid request' })
            }
        }
    }).catch(err => res.json({ status: 'something went wrong' }));
    
})

module.exports = router;
