import express from 'express';

const router = express.Router();

// Controller
const registerController = require('../controllers/RegisterController');

// middlewares
const validateRequest = require('../middlewares/validateRequest');

// Validators
const registerValidator = require('../validators/RegisterValidator');

router.post('/register', registerValidator.handle(), validateRequest, registerController.register);

export {router as registerRouter};
