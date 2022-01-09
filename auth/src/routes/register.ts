import express from 'express';

const router = express.Router();

// Controller
const registerController = require('../controllers/RegisterController');

// Validators
const registerValidator = require('../validators/RegisterValidator');

router.post('/register', registerValidator.handle(), registerController.register);

export {router as registerRouter};
