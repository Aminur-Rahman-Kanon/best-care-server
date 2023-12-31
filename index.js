const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors({ 
    origin: ['http://localhost:3000', 'https://best-care-client.onrender.com'],
    default: 'https://best-care-client.onrender.com'
}));

const uploadProducts = require('./routes/uploadProduct');
const fetchProducts = require('./routes/fetchproducts');
const adminLogin = require('./routes/adminLogin');
const tokenValidation = require('./routes/tokenValidation');
const fetchProduct = require('./routes/fetchProduct');
const fetchCategory = require('./routes/fetchCategory');
const addPhoto = require('./routes/addPhoto');
const removeImg = require('./routes/removeImg');
const updateProduct = require('./routes/updateProduct');

app.use('/upload-products', uploadProducts);
app.use('/admin-login', adminLogin);
app.use('/verify-token', tokenValidation);
app.use('/fetch-products', fetchProducts);
app.use('/fetch-category/:category', fetchCategory);
app.use('/fetch-product', fetchProduct);
app.use('/add-photo', addPhoto);
app.use('/remove-img', removeImg);
app.use('/update-product-details', updateProduct);

mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(conn => console.log('database connected')).catch(err => console.log(err));

app.listen(process.env.PORT || '8080', (err) => {
    if (err){
        return console.log(err)
    }

    console.log('Server is runnning on port 8080');
})
