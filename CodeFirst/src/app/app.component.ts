import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseController } from './controllers/BaseController';


@Component({
    selector: 'app-root',
    template: `<cipher></cipher>`
})

@Injectable()
export class AppComponent {
    constructor(private http: Http) {
        BaseController.Instance.http = http;
    }
}