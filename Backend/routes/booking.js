import express from 'express';
import { isLoggedIn } from '../middlewares/user';

import {
  createBookings,
  getBookings,
}  from '../controllers/bookingController.js';

const router = express.Router();

// Protected routes (user must be logged in)
router.route('/').get(isLoggedIn, getBookings).post(isLoggedIn, createBookings);

module.exports = router;