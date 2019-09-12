import { Component, OnInit } from '@angular/core';
import {EmailGroup} from './models/email-group';
import {EmailGroupService} from './services/email-group.service';
import {forEachComment} from 'tslint';



@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit    {

   emailGroup: EmailGroup = {
    id: 0,
    name: '',
     checkedToSend: false
  };

  public subject: string;
  public content: string;
  public checkedEmailGroups: EmailGroup[] = [];

  public emailGroups: EmailGroup[] = [];

   public checked(emailGroup: EmailGroup): void {
     this.checkedEmailGroups.push(emailGroup);
   }
  toggleVisibility(e, emailGroup: EmailGroup) {
    emailGroup.checkedToSend = e.target.checked;

  }


  ngOnInit() {
    this.getAllEmailGroups()
  }
  constructor(private emailGroupService: EmailGroupService) { }

   getAllEmailGroups() {
     this.emailGroupService.getAllEmailGroups().subscribe(res => {this.emailGroups = res},
             error => {alert('Nie ma')})
  }

  public sendEmail(){
      this.emailGroupService.sendEmailToGroups(this.subject, this.content, this.emailGroups)
              .subscribe(res => {}, error => {alert('Nie MOZNA'); });
  }

}
