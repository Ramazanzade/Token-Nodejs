const express = require('express');
const {tokencontruler}=require('../Collektor/tokenCoolector')
    const router = express.Router();


router.post('/', tokenCoolector.tokencontruler);
router.get('/', tokenCoolector.tokencontruler);


module.exports = router