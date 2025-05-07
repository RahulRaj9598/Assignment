const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { bookActivity, getMyBookings } = require("../controllers/bookingController");

router.post("/", auth, bookActivity);
router.get("/my", auth, getMyBookings);

module.exports = router;
