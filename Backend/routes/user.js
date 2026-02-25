import express from 'express';
import multer from 'multer';

const upload = multer({ dest: '/tmp' });

import {
  register,
  login,
  logout,
  googleLogin,
  uploadPicture,
  updateUserDetails,
} from '../controllers/userController';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/google/login').post(googleLogin)
router.route('/upload-picture').post(upload.single('picture', 1), uploadPicture)
router.route('/update-user').put(updateUserDetails)
router.route('/logout').get(logout);


module.exports = router;