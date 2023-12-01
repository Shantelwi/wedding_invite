const express = require('express');
const router = express.Router();

router.get('/giftregistry',(req,res) => {
    res.json({title: 'Gift Registry' , message: 'Explore our gift registry.'})
});

module.exports = router;