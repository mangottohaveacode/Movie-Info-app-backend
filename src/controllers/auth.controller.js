const router = require("express").Router();
const { authService } = require("../services/auth.service");

router.post("/register", async (req, res) => {
  const user = await authService.register(req.body);

  return res.status(204).json({ user });
});

module.exports = router;
