import { RequestOptions, Headers, Http, Response } from '@angular/http'

export class HTTPController {

        static getHeadersContentType(): RequestOptions {
            let headers = new Headers({
                'Content-Type': 'text/json'
            });

            return new RequestOptions({ headers: headers });
        }

        static async GetRequest(http: Http, url: string): Promise<Response> {
            let options = this.getHeadersContentType();

        let res: any;
        res = await http.get(url, options).toPromise().catch(function (err) {
            return err;
        });
        return res;
    }

    static async PostRequest(http: Http, url: string, body: any): Promise<Response> {
        let options = this.getHeadersContentType();

        let res: any;
        res = await http.post(url, body, options).toPromise().catch(function (err) {
            return err;
        });
        return res;
    }

    static async PutRequest(http: Http, url: string, body: any): Promise<Response> {
        let options = this.getHeadersContentType();

        let res: any;
        res = await http.put(url, body, options).toPromise().catch(function (err) {
            return err;
        });
        return res;
    }

    static async DeleteRequest(http: Http, url: string): Promise<Response> {
        let options = this.getHeadersContentType();

        let res: any;
        res = await http.delete(url, options).toPromise().catch(function (err) {
            return err;
        });
        return res;
    }
}