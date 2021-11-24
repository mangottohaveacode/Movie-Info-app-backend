const router = require("express").Router();
const { authService } = require("../services/auth.service");
const { registerValidationRules } = require("../validation/auth.validation");
const { validate } = require("../middleware/validation.middleware");

router.post(
  "/register",
  validate(registerValidationRules),
  async (req, res) => {
    const user = await authService.register(req.body);

    return res.status(204).json({ user });
  }
);

module.exports = router;
