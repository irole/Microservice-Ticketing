import express from 'express';

import CurrentUserController from "../controllers/CurrentUserController";
import {currentUser} from "@irolegroup/common";

const router = express.Router();

router.get('/currentuser', currentUser, CurrentUserController.index);

export {router as currentUserRouter};
