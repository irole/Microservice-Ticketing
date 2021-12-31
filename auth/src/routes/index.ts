// Packages
import express from 'express';

const router = express.Router();

import {loginRouter} from './login'
import {registerRouter} from './register'
import {logoutRouter} from './logout'
import {currentUserRouter} from './current-user'

router.use('/api/users', loginRouter);
router.use('/api/users', registerRouter);
router.use('/api/users', logoutRouter);
router.use('/api/users', currentUserRouter);

module.exports = router;
