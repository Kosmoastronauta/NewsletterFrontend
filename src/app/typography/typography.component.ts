import { Component, OnInit } from '@angular/core';
import {EmailGroupService} from '../table-list/services/email-group.service';
import {GroupAction} from './models/group-action';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor(private emailGroupService: EmailGroupService) { }

  groupAction: GroupAction = {
    id: 0, groupId: 0, name: '', content: '', subject: '',
  };
  ngOnInit() {
  }

}
