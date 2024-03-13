const express = require('express');
const Profile = require('../../controllers/Profile.controller');
const router = express.Router();


router.get('/profile', Profile)

module.exports=router