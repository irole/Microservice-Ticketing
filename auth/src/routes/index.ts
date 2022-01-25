// Packages
import express from 'express';

const router = express.Router();

import {loginRouter} from './login'
import {registerRouter} from './register'
import {logoutRouter} from './logout'
import {currentUserRouter} from './current-user'
import {NotFound} from "../errors/NotFound";
import {errorHandler} from "../middlewares/error-handler";

router.use('/api/users', loginRouter);
router.use('/api/users', registerRouter);
router.use('/api/users', logoutRouter);
router.use('/api/users', currentUserRouter);


router.all('*', async (req, res) => {
    throw new NotFound('Not Found');
});

router.use(errorHandler);

module.exports = router;
