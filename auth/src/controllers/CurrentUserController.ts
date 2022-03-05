import Controller from "./Controller";

class CurrentUserController extends Controller {

    index(req: any, res: any, next: any) {
        try {
            return res.send({currentUser: req.currentUser || null});
        } catch (e) {
            next(e);
        }
    }
}

export default new CurrentUserController();
