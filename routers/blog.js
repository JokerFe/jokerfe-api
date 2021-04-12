var express = require('express');
const router = express.Router()

router.post('/list', (req, res) => {
    res.send('list')
})

module.exports = router;