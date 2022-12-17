const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("From shop.js", adminData.products); //testing getting data from admin.js
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;