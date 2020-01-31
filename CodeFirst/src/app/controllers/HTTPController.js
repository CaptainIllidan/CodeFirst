var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { RequestOptions, Headers } from '@angular/http';
export class HTTPController {
    static getHeadersContentType() {
        let headers = new Headers({
            'Content-Type': 'text/json'
        });
        return new RequestOptions({ headers: headers });
    }
    static GetRequest(http, url) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = this.getHeadersContentType();
            let res;
            res = yield http.get(url, options).toPromise().catch(function (err) {
                return err;
            });
            return res;
        });
    }
    static PostRequest(http, url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = this.getHeadersContentType();
            let res;
            res = yield http.post(url, body, options).toPromise().catch(function (err) {
                return err;
            });
            return res;
        });
    }
    static PutRequest(http, url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = this.getHeadersContentType();
            let res;
            res = yield http.put(url, body, options).toPromise().catch(function (err) {
                return err;
            });
            return res;
        });
    }
    static DeleteRequest(http, url) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = this.getHeadersContentType();
            let res;
            res = yield http.delete(url, options).toPromise().catch(function (err) {
                return err;
            });
            return res;
        });
    }
}
//# sourceMappingURL=HTTPController.js.map