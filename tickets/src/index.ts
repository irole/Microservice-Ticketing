import express from 'express';

const bodyParser = require('body-parser');
import cookieSession from 'cookie-session';
import {Router} from "./routes/index";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('trust proxy', true);
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test'
    })
);

app.use(Router);

export = app;
