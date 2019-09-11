import {HttpClient} from '@angular/common/http';
import {EmailGroup} from '../models/email-group';
import {Observable} from 'rxjs';

export class EmailGroupService {

    private BASE_URL = 'http://localhost:8080';
    private ALL_EMAIL_GROUPS_URL = `${this.BASE_URL}\\emailGroups\\`;

    constructor(private http: HttpClient) {}

    getAllEmailGroups(): Observable<EmailGroup[]>
    {
        return this.http.get<EmailGroup[]>(this.ALL_EMAIL_GROUPS_URL);
    }
}
