import { HTTPController } from "./HTTPController";
import { Http, Response } from '@angular/http';

export class BaseController {
    protected static _instance: BaseController;
    public static get Instance(): BaseController {
        if (this._instance == undefined) {
            this._instance = new BaseController();
        }
        return this._instance;
    }

    constructor() {
        BaseController.Server = 'http://localhost:60125';
    }

    private static Server: string;
    public http: Http;

    //Запрос
    public async Request(type: string, url: string, body: any): Promise<Response> {
        let res: Response;
        switch (type) {
        case "GET":
            res = await HTTPController.GetRequest(BaseController.Instance.http, BaseController.Server + '/' + url);
            break;
        case "POST":
            res = await HTTPController.PostRequest(BaseController.Instance.http, BaseController.Server + '/' + url, body);
            break;
        case "PUT":
            res = await HTTPController.PutRequest(BaseController.Instance.http, BaseController.Server + '/' + url, body);
            break;
        case "DELETE":
            res = await HTTPController.DeleteRequest(BaseController.Instance.http, BaseController.Server + '/' + url);
            break;
        }
        return res;
    }
}