import { Component, OnInit } from '@angular/core';
import {AutosizeModule} from 'ngx-autosize';
import {MatTextareaAutosize} from '@angular/material/input';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public getAllGroups() {
    this.apiService.getAllBooks().subscribe(res => {
              this.books = res
            },
            error => {
              alert("Error while getting all books")
            });
  }

}
