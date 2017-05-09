const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Node Project Template',
        data: {
            hello: 'world'
        }
    });
});

module.exports = router;
