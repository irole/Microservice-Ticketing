import express from 'express';
import LogoutController from "../controllers/LogoutController";

const router = express.Router();

router.get('/logout', LogoutController.index);

export {router as logoutRouter};
