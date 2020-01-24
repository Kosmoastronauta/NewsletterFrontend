import { Injectable } from '@angular/core';
import {EmailGroup} from '../models/email-group';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Message} from '../models/message';
import {GroupAction} from '../../typography/models/group-action';

@Injectable({
  providedIn: 'root'
})
export class EmailGroupService {
  private BASE_URL = 'http://localhost:8181';
  private ALL_EMAIL_GROUPS_URL = `${this.BASE_URL}\\allGroups\\`;
  private SEND_EMAIL_TO_GROUPS = `${this.BASE_URL}\\send\\groups\\`;
  private ADD_ACTION_TO_GROUP = `${this.BASE_URL}\\addActionToGroup\\`;

  message: Message =
          {
            subject: '',
            content: '',
            groups: []
          };

  constructor(private http: HttpClient) { }

  getAllEmailGroups(): Observable<EmailGroup[]> {
    return this.http.get<EmailGroup[]>(this.ALL_EMAIL_GROUPS_URL);
  }

  sendEmailToGroups(subject: string, content: string, emailGroups: EmailGroup[]): Observable<any> {

    this.message.groups = [];
    this.message.subject = subject;
    this.message.content = content;

    emailGroups.forEach(g => {

      if (g.checkedToSend) { this.message.groups.push(g.id); }
    });

    return this.http.post<Message>(this.SEND_EMAIL_TO_GROUPS, this.message);
  }

  addActionToGroup(groupAction: GroupAction): Observable<any> {
    return this.http.post<GroupAction>(this.ADD_ACTION_TO_GROUP, groupAction);
  }

  getActionsBGroupId(groupId: number): Observable<any> {
    return this.http.get(this.BASE_URL + '/groupId/' + groupId + '/actions/');
  }
}
