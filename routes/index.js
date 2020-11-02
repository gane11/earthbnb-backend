// const express = require('express');
// const router = express.Router();
// const {userValidation} = require('../auth');


// router.get("/", (req, res) => {
//   res.render()
// })

const router = require('express').Router();
const api = require('./api');

router.use('/api', api);

module.exports = router;