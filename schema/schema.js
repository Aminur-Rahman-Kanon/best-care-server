const mongoose = require('mongoose');

const admin = {
    email: { type: String, required: true },
    password: { type: String, required: true }
}

const product = {
    stock: { type: Number, required: true },
    title: { type: String, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Array, required: true },
    price: { type: Object, required: true },
    deliveryTime: String,
    img: { type: Object, required: true },
    description: { type: String, required: true },
    customerReviews: Array,
    purchased: Number,
    category: { type: String, requied: true },
    subCategory: { type: String, requied: true }
}

const adminModel = mongoose.model('admin', admin);
const productModel = mongoose.model('products', product);
// const readyStockModel = mongoose.model('ready-stock', product);
// const electroicsDevicesModel = mongoose.model('electronics-devices', product);
// const earphoneAndGadgetModel = mongoose.model('electronics-and-gadget', product);
// const electricTrimmerModel = mongoose.model('electric-trimmer', product);
// const gentsFashionModel = mongoose.model('gents-fashion', product);
// const healthAndFitnessModel = mongoose.model('health-and-fitness', product);
// const ladiesFashionModel = mongoose.model('ladies-fashion', product);
// const cosmeticsModel = mongoose.model('cosmetics', product);
// const skincareProductsModel = mongoose.model('skincare-products', product);
// const coupleSetModel = mongoose.model('couple-set', product);
// const kidsSectionModel = mongoose.model('kids-section', product);
// const winterFashionModel = mongoose.model('winter-fashion', product);
// const beddingAndBathModel = mongoose.model('bedding-and-bath', product);
// const gentsAccessoriesModel = mongoose.model('gents-accessories', product);
// const beautyToolsModel = mongoose.model('beauty-tools', product);
// const computerAccessoriesModel = mongoose.model('computer-accessories', product);
// const giftItemsModel = mongoose.model('gift-items', product);
// const valentineSpecialModel = mongoose.model('valentine-special', product);
// const eidCollectionGentsModel = mongoose.model('eid-collection-gents', product);
// const eidCollectionLadiesModel = mongoose.model('eid-collection-ladies', product);
// const homeAndKitchenModel = mongoose.model('home-and-kitchen', product);

const hotDealsModel = mongoose.model('hot-deals', product);
const popularProductModel = mongoose.model('popular-products', product);
const newArrivalsModel = mongoose.model('new-arrivals', product);

module.exports = {
    adminModel,
    productModel,
    // readyStockModel,
    // electroicsDevicesModel,
    // electricTrimmerModel,
    // earphoneAndGadgetModel,
    // gentsAccessoriesModel,
    // healthAndFitnessModel,
    // ladiesFashionModel,
    // cosmeticsModel,
    // skincareProductsModel,
    // coupleSetModel,
    // kidsSectionModel,
    // winterFashionModel,
    // beddingAndBathModel,
    // beautyToolsModel,
    // computerAccessoriesModel,
    // giftItemsModel,
    // valentineSpecialModel,
    // eidCollectionGentsModel,
    // eidCollectionLadiesModel,
    // homeAndKitchenModel,
    // gentsFashionModel,
    hotDealsModel,
    popularProductModel,
    newArrivalsModel
}
