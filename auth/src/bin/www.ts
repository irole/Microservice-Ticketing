import mongoose from 'mongoose';

import app from '../index';

const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined');
    }

    try {

        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
            // @ts-ignore
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected to mongoDb Database!');
    } catch (err) {
        console.error(err);
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000!');
    });
};

start();
