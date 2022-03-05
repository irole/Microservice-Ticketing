import express from 'express';
import LoginValidator from "../validators/LoginValidator";
import LoginController from "../controllers/LoginController";
import {validateRequest} from "@irolegroup/common";


const router = express.Router();

router.post('/login', LoginValidator.handle(), validateRequest, LoginController.login);

export {router as loginRouter};
