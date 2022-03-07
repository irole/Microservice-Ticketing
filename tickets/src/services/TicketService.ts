import Service from "./Service";
import Ticket from "../models/ticket";

class TicketService extends Service {

    constructor() {
        super(Ticket);
    }
}

export default new TicketService();
