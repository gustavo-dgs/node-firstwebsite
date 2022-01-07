const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index.html', {
        title: 'HOME',
        arr: ["active","",""]
    });
});

router.get('/contact', (req,res) => {
    res.render('contact.html', {
        title: 'HOME',
        arr: ["","","active"]
    });
});

module.exports = router;