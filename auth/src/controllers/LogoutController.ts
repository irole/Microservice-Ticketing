import Controller from "./Controller";

class LogoutController extends Controller {

    index(req: any, res: any, next: any) {
        try {
            req.session = null;
            res.send({});

        } catch (e) {
            next(e);
        }
    }
}

export default new LogoutController();
