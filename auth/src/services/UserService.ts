import express from 'express';
// Packages

const bcrypt = require('bcrypt');
// Service
const Service = require('../services/Service');
// Model
const User = require('../models/user');

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

}

module.exports = new UserService();
