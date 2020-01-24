import { Component, OnInit } from '@angular/core';
import {EmailGroupService} from '../table-list/services/email-group.service';
import {GroupAction} from './models/group-action';
import {EmailGroup} from '../table-list/models/email-group';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent implements OnInit {

  emailGroups: EmailGroup[];
  checkedGroup: EmailGroup;
  actionName: string;
  subject: string;
  content: string;
  groupAction: GroupAction = {
    groupId: 0, name: '', content: '', subject: '',
  };

  toggleVisibility(e, emailGroup: EmailGroup) {
    this.checkedGroup = emailGroup;
    this.groupAction.groupId = emailGroup.id;
  }

  constructor(private emailGroupService: EmailGroupService) { }
  ngOnInit() {
    this.getAllEmailGroups();
  }

  getAllEmailGroups() {
    this.emailGroupService.getAllEmailGroups().subscribe(res => {this.emailGroups = res},
            error => {alert('Something went wrong')})
  }

  public addActionToGroup() {

    if (this.checkedGroup == null) { alert('You must check group first'); } else {
      this.groupAction.name = this.actionName;
      this.groupAction.subject = this.subject;
      this.groupAction.content = this.content;
      this.emailGroupService.addActionToGroup(this.groupAction)
              .subscribe(res => {alert('Successfully added action to group')}, error => {
                alert('Something went wrong' + ' while' + ' adding action to group');
              });
    }
    }


}
