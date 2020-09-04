const express = require('express');
const router = express.Router();
var Detail = require('../models/watchlist.model');

router.get('/', (req, res) => {
    Detail.find({})
    .then(Details => {
        res.render('./patient/watching-list', { Details : Details})
    })
    .catch(err => {
        console.log('Error: ', err);
        throw err;
    })
 }); 

module.exports = router;