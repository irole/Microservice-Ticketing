import express from 'express';
const bodyParser = require('body-parser');
import cookieSession from 'cookie-session';

const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('trust proxy', true);
app.use(
    cookieSession({
        signed: false,
        secure: true
    })
);
app.use(require('./routes'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('connect to mongoDb Database!');
});
app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
