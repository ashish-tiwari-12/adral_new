const express = require("express");
const router = express.Router();
const { joinWaitlist } = require("../controllers/waitlistController");

// POST /api/waitlist/join
router.post("/join", joinWaitlist);

module.exports = router;
