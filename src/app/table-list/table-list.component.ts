import { Component, OnInit } from '@angular/core';
import {EmailGroup} from './models/email-group';
import {EmailGroupService} from './services/email-group.service';



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

  public emailGroups: EmailGroup[] = [];
  constructor(private emailGroupService: EmailGroupService) { }

  public getAllBooks() {
    this.emailGroupService.getAllEmailGroups().subscribe(res => {
              this.emailGroups = res
            },
            error => {
              alert('Error while getting all books');
            });
  }

  ngOnInit() {}
}
