const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('../views/products/index.ejs');
});

router.get('/productos/:id', (req,res) => {
    res.render('../views/products/product.ejs', {id: req.params.id});
});



module.exports = router;