var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CipherController } from '../../controllers/CipherController';
import { Component } from '@angular/core';
let CipherComponent = class CipherComponent {
    constructor() {
        this.cipherController = new CipherController;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.ciphers = yield this.cipherController.GetAllCiphers();
            this.updateMessages();
        });
    }
    updateMessages() {
        return __awaiter(this, void 0, void 0, function* () {
            this.messages = yield this.cipherController.GetAllMessages();
        });
    }
    sendMessage() {
        this.cipherController.CreateMessage(this.messageText)
            .then((res) => {
            if (res == 'OK') {
                this.updateMessages();
                this.messageText = '';
            }
            else {
                alert(res);
            }
        });
    }
};
CipherComponent = __decorate([
    Component({
        selector: 'cipher',
        template: `
<div>
    <div class="form-group">
        <label for="encodeInput">Text to encode:</label>
        <input type="text" [(ngModel)]="messageText" class="form-control" id="encodeInput" aria-describedby="encodeHelp" placeholder="Enter text to encode">
        <small id="encodeHelp" class="form-text text-muted">We'll never share your decoded text with anyone else.</small>
    </div>
    <button type="button" class="btn btn-primary" (click)="sendMessage()">Send message</button>
</div>
<br/>
<div *ngIf=!messages>
    Loading messages...
</div>
<div *ngIf=messages>
    <table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Encoded text</th>
            <th scope="col">Date/time</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let message of messages; index as i">
            <th scope="row">{{ i + 1 }}/{{messages.length}}.</th>
            <td>
                {{message.Text}}
            </td>
            <td>{{message.ReceiptTime | date: 'medium'}}</td>
        </tr>
        </tbody>
    </table>
</div>
`
    })
], CipherComponent);
export { CipherComponent };
//# sourceMappingURL=cipher.component.js.map