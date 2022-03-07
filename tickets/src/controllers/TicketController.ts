import Controller from "./Controller";
import ticketService from "../services/TicketService";
import {NotFound} from "@irolegroup/common";

class TicketController extends Controller {

    async index(req: any, res: any, next: any) {
        try {
            const tickets = await ticketService.findAll();
            res.send(tickets);
        } catch (e) {
            next(e);
        }
    }

    async show(req: any, res: any, next: any) {
        try {
            const ticket = await ticketService.findById(req.params.id);
            if (!ticket) throw new NotFound("ticket not found");
            res.send(ticket);
        } catch (e) {
            next(e);
        }
    }

    async new(req: any, res: any, next: any) {
        try {

        } catch (e) {
            next(e);
        }
    }

    async update(req: any, res: any, next: any) {
        try {
            const ticket = await ticketService.findById(req.params.id);
            if (!ticket) throw new NotFound("ticket not found");
            res.send(ticket);
        } catch (e) {
            next(e);
        }
    }
}

export default new TicketController();
