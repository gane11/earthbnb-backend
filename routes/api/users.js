const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");


const { asyncHandler, handleValidationErrors, generateToken} = require("../utils");
const { getUserToken } = require("../../auth");
const { Users} = require("../../db/models");

const router = express.Router();

const signupValidations = [
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("A first name is required.")
    .isLength({ min: 1, max: 50 })
    .withMessage("A first name must be between 1 and 50 characters."),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("A last name is required.")
    .isLength({ min: 1, max: 50 })
    .withMessage("A last name must be between 1 and 50 characters."),
];

const sharedAuthValidations = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("A valid email address is required")
    .isLength({ max: 100 })
    .withMessage("Email address must be less than 100 characters"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("User password is required"),
];


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await Users.findByPk(userId);
  const name = user.firstName;


  res.json({ name });
}));


//sign up
router.post("/",
  signupValidations,
  sharedAuthValidations,
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please confirm your password")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Confirm Password field does not match password."),
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Users.create(
      {
        firstName,
        lastName,
        email,
        hashedPassword
      }
    );
    const token = await getUserToken(user);
    res.status(201).json({
      user: { id: user.id },
      token
    });
  })
);


// sign in
router.post("/token", sharedAuthValidations,
  asyncHandler(async (req, res, next) => {
    debugger
    const { email, password } = req.body;
    // const user = await Users.findByEmail(email)
    const user = await Users.findOne(
      {
        where: { email }
      }
    );
    if (!user || !user.validatePassword(password)) {
      const error = new Error("Invalid credentials");
      error.status = 401;
      error.title = "Invalid credentials";
      error.errors = ["Unable to authenticate provided information. Please check user name and/or password."];
      return next(error);
    }
    const {jti, token} = generateToken(user)
    user.tokenId = jti
    await user.save();
    res.json({ 
      user: { id: user.id },
      token
    });
  })
);

router.delete("/", asyncHandler(async (req, res, next) => {
  req.tokenId = null
  res.json({message: 'success'})
}))


///getting all homes for specific user
router.get('/:id/homes', asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const homes = await Homes.findAll({
    where: {
      userId
    },
    // include: [{ model: Task,as:"task",attributes: ['taskName'] } ],
    order: [['createdAt', 'DESC']],
  });
  res.json({ homes });
}));


module.exports = router