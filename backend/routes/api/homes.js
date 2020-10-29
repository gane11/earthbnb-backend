const express = require("express");
const { Homes } = require("../../db/models");

const router = express.Router();
const { asyncHandler} = require("../utils");


router.get('/', asyncHandler(async (req, res) => {
  const homes = await Homes.findAll({
    order: [['createdAt', 'DESC']],
  })
  


  res.json({ homes});
}));


router.get('/:id', asyncHandler(async function (req,res) {
  const home = await Homes.findByPk(req.params.id);
  res.json(home);
}))

module.exports = router