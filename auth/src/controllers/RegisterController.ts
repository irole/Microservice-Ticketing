import jwt from 'jsonwebtoken';
import {ConflictError} from "../errors/ConflictError";

// Controller
const Controller = require('../controllers/Controller');
// Validation Message
const ValidationMessage = require('../validators/ValidationMessage');
// Services
const userService = require('../services/UserService');

class RegisterController extends Controller {

    async register(req: any, res: any, next: any) {
        try {

            const {email, password} = req.body;
            const existingUser = await userService.findOne({email});
            if (existingUser) throw new ConflictError('email in use');

            const user = await userService.insert({email, password});

            // Store it on session object
            req.session = {
                jwt: this.generateToken(user.id)
            };

            res.status(201).send(user);

        } catch (e) {
            next(e);
        }
    }

    async generateToken(userId: any) {
        let expireTime: number = 60 * 60 * 24;// 1 Day
        return jwt.sign({id: userId}, process.env.JWT_KEY!, {expiresIn: expireTime});
    }
}

module.exports = new RegisterController();
