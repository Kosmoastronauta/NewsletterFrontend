import { Injectable } from '@angular/core';
import {EmailGroup} from '../models/email-group';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailGroupService {

  private BASE_URL = 'http://localhost:8080';
  private ALL_EMAIL_GROUPS_URL = `${this.BASE_URL}\\emailGroups\\`;

  constructor(private http: HttpClient) { }

  public getAllEmailGroups(): Observable<EmailGroup[]>
  {
    return this.http.get<EmailGroup[]>(this.ALL_EMAIL_GROUPS_URL);
  }
}
