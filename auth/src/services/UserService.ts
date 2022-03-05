import Service from "./Service";
import User from "../models/user";
// Packages

const bcrypt = require('bcrypt');


interface UserAttrs {
    email: string;
    password: string;
}

class UserService extends Service {

    constructor() {
        super(User);
    }

    bcryptPassword(password: any): any {
        // Bcrypt with 15 salt
        let salt = bcrypt.genSaltSync(15);
        // Bcrypt Password with Salt
        return bcrypt.hashSync(password, salt);
    }

    async insert(values: UserAttrs): Promise<any> {
        return super.insert(values);
    }

    comparePassword(password: string, userPassword: string) {
        return bcrypt.compareSync(password, userPassword);
    }

}

export default new UserService();
