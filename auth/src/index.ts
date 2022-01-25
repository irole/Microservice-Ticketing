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

export = app;
