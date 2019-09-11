import { Component, OnInit } from '@angular/core';
import {EmailGroup} from './models/email-group';
import {EmailGroupService} from './services/email-group.service';



@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit    {


   emailGroup: EmailGroup = {
    id: 0,
    name: ''
  };

  public emailGroups: EmailGroup[] = [];


  ngOnInit() {
    this.getAllEmailGroups()
  }
  constructor(private emailGroupService: EmailGroupService) { }

   getAllEmailGroups() {
     console.log('Elo w komponencie');
     this.emailGroupService.getAllEmailGroups().subscribe(res => {this.emailGroups = res},
             error => {alert('Nie ma')})
  }

}
