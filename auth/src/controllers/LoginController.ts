import Controller from "./Controller";
import userService from "../services/UserService";
import {ClientError} from "@irolegroup/common";

class LoginController extends Controller {

    async login(req: any, res: any, next: any) {
        try {
            let {email, password} = req.body;
            const existingUser = await userService.findOne({email});
            if (!existingUser) throw new ClientError('Invalid credentials');
            const passwordsMatch: Boolean = userService.comparePassword(password, existingUser.password);
            if (!passwordsMatch) throw new ClientError('Invalid credentials');

            // Store it on session object
            req.session = {
                jwt: await this.generateToken(existingUser.id),
            };

            res.status(200).send(existingUser);
        } catch (e) {
            next(e);
        }
    }

}

export default new LoginController();
