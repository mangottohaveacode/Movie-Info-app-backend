const router = require("express").Router();
const { authService } = require("../services/auth.service");
const {
  registerValidationRules,
  loginValidation
} = require("../validation/auth.validation");
const { validate } = require("../middleware/validation.middleware");

router.post(
  "/register",
  validate(registerValidationRules),
  async (req, res) => {
    const user = await authService.register(req.body);

    return res.status(204).json({ user });
  }
);

router.post("/login", validate(loginValidation), async (req, res) => {
  const response = await authService.login(req.body);

  if (response === null) {
    return res
      .status(401)
      .json({ error: "The email or password are incorrect" });
  }

  return res.status(200).json(response);
});

module.exports = router;
