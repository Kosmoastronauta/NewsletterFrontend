import { Injectable } from '@angular/core';
import {EmailGroup} from '../models/email-group';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Message} from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class EmailGroupService {

  private BASE_URL = 'http://localhost:8181';
  private ALL_EMAIL_GROUPS_URL = `${this.BASE_URL}\\groups\\`;

  constructor(private http: HttpClient) { }

  getAllEmailGroups(): Observable<EmailGroup[]> {
    return this.http.get<EmailGroup[]>(this.ALL_EMAIL_GROUPS_URL);
  }

  sendEmailToGroups(message: Message, emailGroups: Observable<EmailGroup[]>): Observable<any> {


  }
}
