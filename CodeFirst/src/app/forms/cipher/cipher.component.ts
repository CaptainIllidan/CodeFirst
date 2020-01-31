import { ApiCipher, ApiMessage } from '../../common/types/ApiCipher';
import { CipherController } from '../../controllers/CipherController';
import { Input, Component, OnInit } from '@angular/core';

@Component({
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

export class CipherComponent implements OnInit {
    messages: ApiMessage[];
    ciphers: ApiCipher[];
    messageText: string;
    cipherController = new CipherController;

    async ngOnInit() {
        this.ciphers = await this.cipherController.GetAllCiphers();
        this.updateMessages();
    }

    async updateMessages() {
        this.messages = await this.cipherController.GetAllMessages();

    }

    sendMessage() {
        this.cipherController.CreateMessage(this.messageText)
            .then((res) => {
                if (res == 'OK') {
                    this.updateMessages();
                    this.messageText = '';
                } else {
                    alert(res);
                }
                
            });
    }
}