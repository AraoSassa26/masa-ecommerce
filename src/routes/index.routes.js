const { Router } = require("express");
const router = Router();

router.get("/health", (req, res) => {
  res.json({ status: "ok", api: "MASA" });
});

module.exports = router;
