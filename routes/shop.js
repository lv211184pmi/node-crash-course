const express = require('express');

const router = express.Router();

router.get('/shop', (req, res, next) => {
    console.log('from shop');
});

module.exports = router;