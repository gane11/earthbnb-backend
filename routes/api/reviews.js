

const express = require('express');
const { check } = require('express-validator');
const { handleValidationErrors, asyncHandler } = require('../utils');
// const {requireAuth} = require('../../auth');
const router = express.Router();
const db = require('../../db/models');

const { Users, Homes, Reviews } = db;

// const validateReview = [
//   check('title')
//     .exists({ checkFalsy: true })
//     .withMessage("Title name can't be undefined."),
//   check('title')
//     .isLength({ max: 50 })
//     .withMessage("Title can't be longet than 50 characters."),
//   check('rating')
//     .exists({ checkFalsy: true })
//     .withMessage("Rating can't be undefined"),
//   handleValidationErrors,
// ];


const homeNotFoundError = (id) => {
  const err = Error('Home not found');
  err.errors = [`Home with the id of ${id} could not be found`];
  err.title = 'Home not found';
  err.status = 404;
  return err;
};

//getting all Homes 

router.get('/', asyncHandler(async (req, res) => {
  const homes = await Homes.findAll({
    // include: [{ model: Task,as:"task",attributes: ['taskName'] } ],
    order: [['createdAt', 'DESC']],
  });
  res.json({ homes });
}));


//get One home

router.get('/:homeId', asyncHandler(async (req, res) => {
  const homeId = req.params.homeId
  const home = await Homes.findOne({
    // include: [{ model: Task,as:"task",attributes: ['taskName'] } ],
    where: {
      homeId
    }
  });
  res.json({ home });
}));




// /api/homes/homeId/reviews will display all reviews for a specific home
router.get('/:homeId/reviews', asyncHandler(async (req, res) => {
  const homeId = req.params.homeId
  const allReviews = await Reviews.findAll({
    where: {
      homeId
    }
  })
  res.json({ allReviews })
}))

// create a new review and store it in the database
router.post('', asyncHandler(async (req, res) => {

  const {
    description,
    userId,
    homeId
  } = req.body
  let review = await Reviews.create({
    description,
    userId,
    homeId

  })
  review = await Reviews.findOne({
    where: {
      id: review.id
    },
  });

  res.json({ review: [review] });
}))

router.delete("/:id", asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  const review = await Reviews.findOne({
    where: { id }
  });

  await review.destroy();
  res.status(200).json({ review});

}))


module.exports = router