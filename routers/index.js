const express = require('express');
const router = express.Router()
router.get('/ping', function (req, res) {
    res.send('Hello Joker');
})

module.exports = router;