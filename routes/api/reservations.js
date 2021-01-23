const express = require('express');
const { check } = require('express-validator');
const { handleValidationErrors, asyncHandler } = require('../utils');
// const {requireAuth} = require('../../auth');
const router = express.Router();
const db = require('../../db/models');

const { Homes, Users, Reservations} = db;


//create a new Reservation

router.post('/', asyncHandler(async(req,res)=> {
  // const homeId = req.params.id 
  const { 
    homeId,
    userId,
    numPeople,
    startDate,
    endDate 
  } = req.body
  let reservation = await Reservations.create({ 
    homeId,
    userId,
    numPeople,
    startDate,
    endDate
    
  })
  reservation = await Reservations.findOne({
    where: {
      id: reservation.id
    },
  });

  res.json({ reservation: [reservation] });

}))


module.exports = router