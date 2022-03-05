import express from 'express';
import registerValidator from "../validators/RegisterValidator";
import registerController from "../controllers/RegisterController";
import {validateRequest} from "@irolegroup/common";

const router = express.Router();


router.post('/register', registerValidator.handle(), validateRequest, registerController.register);

export {router as registerRouter};
