import express from 'express';

const router = express.Router();

router.post('/logout', (req, res) => {
    res.send('Hi there!');
});

export {router as logoutRouter};
