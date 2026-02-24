const express = require("express");
const router = express.Router();
const { joinWaitlist, getWaitlist } = require("../controllers/waitlistController");

// POST /api/waitlist/join
router.post("/join", joinWaitlist);

// GET /api/waitlist (protected by password in controller)
router.get("/", getWaitlist);

module.exports = router;
