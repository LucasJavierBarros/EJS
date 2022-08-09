var express = require('express');
var router = express.Router();

const {details,index} = require('../controllers/indexController')
/* GET home page. */
router
 .get('/', index)
 .get('/details/:id',details)

module.exports = router;
