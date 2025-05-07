const express = require('express');
const { body, validationResult } = require('express-validator');
const { listActivities } = require('../controllers/activityController');

const router = express.Router();

router.post(
  '/',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
    body('location').notEmpty().withMessage('Location is required'),
    body('dateTime').isISO8601().toDate().withMessage('Date and time must be a valid ISO date'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next(); 
  },
  listActivities
);

module.exports = router;
