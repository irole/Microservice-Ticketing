import {ConflictError} from "@irolegroup/common"
import userService from "../services/UserService";
import Controller from "./Controller";

class RegisterController extends Controller {

    async register(req: any, res: any, next: any) {
        try {

            let {email, password} = req.body;
            const existingUser = await userService.findOne({email});
            if (existingUser) throw new ConflictError('email in use');

            const user = await userService.insert({email, password: userService.bcryptPassword(password)});

            // Store it on session object
            req.session = {
                jwt: await this.generateToken(user.id)
            };

            res.status(201).send(user);

        } catch (e) {
            next(e);
        }
    }
}

export default new RegisterController();
