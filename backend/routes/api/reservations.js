const express = require('express');
const { check } = require('express-validator');
const { handleValidationErrors, asyncHandler } = require('../utils');
// const {requireAuth} = require('../../auth');
const router = express.Router();
const db = require('../../db/models');

const { Homes, Users, Reservations} = db;


//create a new Reservation

router.post('/reservations', asyncHandler(async(req,res)=> {
  const homeId = req.params.id 
  const {newReservation } = req.body
  const reservation = await Reservations.create({ homeId,
    
  })
}))


