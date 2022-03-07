// Packages
import express from 'express';

const router = express.Router();

import {errorHandler, NotFound} from "@irolegroup/common";
import TicketController from "../controllers/TicketController";


router.get('/api/tickets', TicketController.index);
router.get('/api/tickets/:id', TicketController.show);
router.post('/api/tickets', TicketController.new);
router.put('/api/tickets/:id', TicketController.update);


router.all('*', async (req: any, res: any, next: any) => {
    try {
        throw new NotFound('Not Found');
    } catch (e) {
        next(e)
    }
});

router.use(errorHandler);

export {router as Router}
