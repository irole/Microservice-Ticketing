import autoBind from 'auto-bind';
import jwt from "jsonwebtoken";

export default class Controller {
    constructor() {
        autoBind(this);
    }
    async generateToken(userId: any) {
        let expireTime: number = 60 * 60 * 24;// 1 Day
        return jwt.sign({id: userId}, process.env.JWT_KEY!, {expiresIn: expireTime});
    }
};
