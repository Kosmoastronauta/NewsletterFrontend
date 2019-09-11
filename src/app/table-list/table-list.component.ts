import { Component, OnInit } from '@angular/core';
import {EmailGroupService} from '../services/email-group-service';
import {EmailGroup} from '../models/email-group';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


    public emailGroup: EmailGroup = {
        id: 0,
        name: ''
    };

    emailGroups: EmailGroup[] = [];

  constructor(private emailGroupService: EmailGroupService) { }

  ngOnInit() {

  }

  public getAllGroups() {
    this.emailGroupService.getAllEmailGroups().subscribe(res => {
              this.emailGroups = res
            },
            error => {
              alert('Error while getting all books')
            });
  }

}
