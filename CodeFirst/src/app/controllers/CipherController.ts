import { ConstService } from "../common/ConstService";
import { BaseController } from "./BaseController";
import { ApiCipher, ApiMessage } from '../common/types/ApiCipher';

export class CipherController extends BaseController {
    //Получаем все элементы шифра
    public async GetAllCiphers(): Promise<ApiCipher[]> {
        let url = ConstService.Route.cipher;
        let res = await this.Request('GET', url, false);
        var result = res.json() as ApiCipher[];
        console.log(result);
        return result;
    }

    //Получаем все сообщения
    public async GetAllMessages(): Promise<ApiMessage[]> {
        let url = ConstService.Route.message;
        let res = await this.Request('GET', url, false);
        var result = res.json() as ApiMessage[];
        console.log(result);
        return result;
    }

    //Создание сообщения
    public async CreateMessage(text: string): Promise<string> {
        console.log('create message: ' + text);
        let url = ConstService.Route.message + '/' + 'Create';
        console.log('url ' + url);
        let res = await this.Request('PUT', url, JSON.stringify(text));
        console.log(res.json());
        return res.statusText;
    }
}