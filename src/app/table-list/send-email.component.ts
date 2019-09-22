import { Component, OnInit } from '@angular/core';
import {EmailGroup} from './models/email-group';
import {EmailGroupService} from './services/email-group.service';


@Component({
  selector: 'send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit    {

  public subject: string;
  public content: string;
  public emailGroups: EmailGroup[] = [];

   public checked(emailGroup: EmailGroup): void {

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
             error => {alert('Something went wrong')})
  }

  public sendEmail() {

      this.emailGroups.forEach(e => console.log(e.name, e.checkedToSend));
      this.emailGroupService.sendEmailToGroups(this.subject, this.content, this.emailGroups)
              .subscribe(res => {alert('Messages have been sent')}, error => {alert('Something went wrong while' +
                      ' sending'); });
  }

}
