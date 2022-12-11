const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); //__dirname means absolute path of where it is called from.
});

module.exports = router;