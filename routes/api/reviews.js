

const express = require('express');
const { check } = require('express-validator');
const { handleValidationErrors, asyncHandler } = require('../utils');
// const {requireAuth} = require('../../auth');
const router = express.Router();
const db = require('../../db/models');

const { Users, Homes, Reviews } = db;

const validateReview = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage("Title name can't be undefined."),
  check('title')
    .isLength({ max: 50 })
    .withMessage("Title can't be longet than 50 characters."),
  check('rating')
    .exists({ checkFalsy: true })
    .withMessage("Rating can't be undefined"),
  handleValidationErrors,
];


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
router.post('/:homeId/reviews/create-review',validateReview, asyncHandler(async (req, res) => {

  const { newReview, homeId } = req.body;
  const review = await Reviews.create({
    reviewName: newReview,
    homeId: homeId
  })
  
  res.json({ review })
}))
