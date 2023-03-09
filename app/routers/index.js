// express import
const express = require('express');
const router = express.Router();

// controller import
const allergyController = require('../controllers/allergyController');
const profilController = require('../controllers/profilController');

// validation import
const isLogger = require('../middlewares/isLogger');
const isValid = require('../middlewares/isValid');
const { login } = require('../validators/profil');



// CRUD User
router.post('/register', profilController.registerUser); // CREATE
router.get('/profil', isLogger(), profilController.getUser); // READ
router.patch('/profil', isLogger(), profilController.updateUser); // UPDATE
router.delete('/profil', isLogger(), profilController.deleteUser); // DELETE
router.post('/login', isValid(login), profilController.loginUser); // connection + création et envoi d'un token

// CRD Allergy
router.get('/allergy/user', isLogger(), allergyController.getFromUser); // READ
router.post('/allergy/user', isLogger(), allergyController.postForUser); // CREATE
router.delete('/allergy/user', isLogger(), allergyController.deleteByUser); // DELETE

// Search product by product name

module.exports = router;
