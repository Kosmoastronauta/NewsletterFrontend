import { Component, OnInit } from '@angular/core';
import {EmailGroupService} from '../table-list/services/email-group.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor(private emailGroupService: EmailGroupService) { }

  ngOnInit() {
  }

}
