

import { Component } from '@angular/core';
import { AppService, IMessage } from '../../services/imessage.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  title = 'Angular PHP Email Example!';
  message: IMessage = {};

  constructor(private appService: AppService, private http: Http) {
    this.http.get('assets/php/file.json');
  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }
}