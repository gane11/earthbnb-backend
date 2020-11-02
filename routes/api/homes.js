const express = require("express");
const { Homes, Reviews } = require("../../db/models");

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

router.get('/:id/reviews', asyncHandler(async function (req, res) {
    const reviews = await Reviews.findAll({
      where: {
        homeId: req.params.id
      },
      order: [['createdAt', 'DESC']],
    })

    res.json({reviews})
}))

module.exports = router