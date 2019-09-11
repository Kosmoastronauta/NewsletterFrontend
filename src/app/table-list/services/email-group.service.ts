import { Injectable } from '@angular/core';
import {EmailGroup} from '../models/email-group';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Message} from '../models/message';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class EmailGroupService {

  private BASE_URL = 'http://localhost:8181';
  private ALL_EMAIL_GROUPS_URL = `${this.BASE_URL}\\groups\\`;
  private SEND_EMAIL_TO_SPECYFIED_GROUPS=`${this.BASE_URL}\\send\\groups\\`;

  message: Message;

  constructor(private http: HttpClient) { }

  getAllEmailGroups(): Observable<EmailGroup[]> {
    return this.http.get<EmailGroup[]>(this.ALL_EMAIL_GROUPS_URL);
  }

  sendEmailToGroups(subject: string, content: string, emailGroups: EmailGroup[]): void {
    console.log('Elo melo');
    this.message.subject = subject;
    this.message.content = content;

    emailGroups.forEach(g => {
      if (g.checkedToSend) { this.message.groups.push(g.id); }
    });

    this.message.groups.forEach(function (value) {
      console.log(value.toString())
    })


    this.http.post<Message>(this.SEND_EMAIL_TO_SPECYFIED_GROUPS, this.message);

  }
}
