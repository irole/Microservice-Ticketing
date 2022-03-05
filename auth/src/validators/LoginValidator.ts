import {body} from 'express-validator';

class RegisterValidator {
    handle() {
        return [
            body('email').isEmail().withMessage('Email must be valid'),
            body('password').trim().isLength({
                min: 4, max: 20
            }).withMessage('Password must be between 4 and 20 characters')];
    }

}

export default new RegisterValidator();
