var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { HTTPController } from "./HTTPController";
export class BaseController {
    static get Instance() {
        if (this._instance == undefined) {
            this._instance = new BaseController();
        }
        return this._instance;
    }
    constructor() {
        BaseController.Server = 'http://localhost:60125';
    }
    //Запрос
    Request(type, url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            switch (type) {
                case "GET":
                    res = yield HTTPController.GetRequest(BaseController.Instance.http, BaseController.Server + '/' + url);
                    break;
                case "POST":
                    res = yield HTTPController.PostRequest(BaseController.Instance.http, BaseController.Server + '/' + url, body);
                    break;
                case "PUT":
                    res = yield HTTPController.PutRequest(BaseController.Instance.http, BaseController.Server + '/' + url, body);
                    break;
                case "DELETE":
                    res = yield HTTPController.DeleteRequest(BaseController.Instance.http, BaseController.Server + '/' + url);
                    break;
            }
            return res;
        });
    }
}
//# sourceMappingURL=BaseController.js.map