const { validationResult } = require("express-validator");
const bearerToken = require('express-bearer-token');
const jwt = require('jsonwebtoken');
const uuid = require('uuid').v4;
const { jwtConfig: { secret, expiresIn } } = require('../config');

const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array();

    const err = Error("Bad request.");
    err.status = 400;
    err.title = "Bad request.";
    err.errors = errors;
    return next(err);
  }
  next();
};

function generateToken(player) {
  const data = {
    name: player.name,
  };
  const jwtid = uuid();

  return {
    jti: jwtid,
    token: jwt.sign({ data }, secret, { expiresIn: Number.parseInt(expiresIn), jwtid })
  };
}

module.exports = { asyncHandler, handleValidationErrors,generateToken};