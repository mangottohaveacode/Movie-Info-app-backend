const { body } = require("express-validator");

const registerValidationRules = [
  body("username").exists().withMessage("Username is a required field"),
  body("email")
    .exists()
    .withMessage("Email is a required field")
    .isEmail()
    .withMessage("Value is not a valid email")
];

const loginValidation = [
  body("password").exists().withMessage("Password is a required field"),
  body("email")
    .exists()
    .withMessage("Email is a required field")
    .isEmail()
    .withMessage("Value is not a valid email")
];

module.exports = { registerValidationRules, loginValidation };
