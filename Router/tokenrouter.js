const express = require('express');
const {tokencontruler}=require('../Collektor/tokenCoolector')
    const router = express.Router();


router.post('/', tokenCoolector.login);
router.post('/', tokenCoolector.tokenControl);


module.exports = router