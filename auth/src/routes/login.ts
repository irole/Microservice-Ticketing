import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
    res.send('Hi there!');
});

export {router as loginRouter};
