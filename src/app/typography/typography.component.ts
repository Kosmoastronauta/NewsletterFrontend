import { Component, OnInit } from '@angular/core';
import {EmailGroupService} from '../table-list/services/email-group.service';
import {GroupAction} from './models/group-action';
import {EmailGroup} from '../table-list/models/email-group';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  emailGroups: EmailGroup[];
  checkedGroup: EmailGroup;
  groupAction: GroupAction = {
    id: 0, groupId: 0, name: '', content: '', subject: '',
  };

  toggleVisibility(e, emailGroup: EmailGroup)
  {
    this.checkedGroup = emailGroup;
  }

  constructor(private emailGroupService: EmailGroupService) { }
  ngOnInit() {
    this.getAllEmailGroups();
  }

  getAllEmailGroups() {
    this.emailGroupService.getAllEmailGroups().subscribe(res => {this.emailGroups = res},
            error => {alert('Something went wrong')})
  }

}
