// Packages
import express from 'express';

const router = express.Router();

import {loginRouter} from './login'
import {registerRouter} from './register'
import {logoutRouter} from './logout'
import {currentUserRouter} from './current-user'
import {errorHandler, NotFound} from "@irolegroup/common";

router.use('/api/users', loginRouter);
router.use('/api/users', registerRouter);
router.use('/api/users', logoutRouter);
router.use('/api/users', currentUserRouter);

router.all('*', async (req: any, res: any, next: any) => {
    try {
        throw new NotFound('Not Found');
    } catch (e) {
        next(e)
    }
});

router.use(errorHandler);

export {router as Router}
