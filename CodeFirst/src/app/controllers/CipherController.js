var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ConstService } from "../common/ConstService";
import { BaseController } from "./BaseController";
export class CipherController extends BaseController {
    //Получаем все элементы шифра
    GetAllCiphers() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = ConstService.Route.cipher;
            let res = yield this.Request('GET', url, false);
            var result = res.json();
            console.log(result);
            return result;
        });
    }
    //Получаем все сообщения
    GetAllMessages() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = ConstService.Route.message;
            let res = yield this.Request('GET', url, false);
            var result = res.json();
            console.log(result);
            return result;
        });
    }
    //Создание сообщения
    CreateMessage(text) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('create message: ' + text);
            let url = ConstService.Route.message + '/' + 'Create';
            console.log('url ' + url);
            let res = yield this.Request('PUT', url, JSON.stringify(text));
            console.log(res.json());
            return res.statusText;
        });
    }
}
//# sourceMappingURL=CipherController.js.map