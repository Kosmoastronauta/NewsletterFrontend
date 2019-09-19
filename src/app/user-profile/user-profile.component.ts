import { Component, OnInit } from '@angular/core';
import {AutosizeModule} from 'ngx-autosize';
import {EmailGroup} from '../table-list/models/email-group';
import {EmailGroupService} from '../table-list/services/email-group.service';
import {GroupAction} from '../typography/models/group-action';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  emailGroups: EmailGroup[];
  checkedGroup: EmailGroup;
  currentAction: GroupAction;

  groupAction: GroupAction = {
    groupId: 0, name: '', content: '', subject: '',
  };
  groupActions: GroupAction[];
  constructor(private emailGroupService: EmailGroupService) { }

  ngOnInit() {
    this.getAllEmailGroups();
  }

  toggleVisibility(e, emailGroup: EmailGroup) {
    this.checkedGroup = emailGroup;
    this.loadActionsOfGroup(this.checkedGroup.id);
  }


  getAllEmailGroups() {
    this.emailGroupService.getAllEmailGroups().subscribe(res => {this.emailGroups = res},
            error => {alert('Something went wrong')})
  }

  loadActionsOfGroup(groupId: number) {
    this.emailGroupService.getActionsBGroupId(groupId).subscribe(res => {this.groupActions = res},
            error => {alert('Can not load actions for this group') })
  }

}
