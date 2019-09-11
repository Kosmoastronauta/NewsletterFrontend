import {Observable} from 'rxjs';

export interface Message {
    subject: string;
    content: string;
    groups: number[];
}
