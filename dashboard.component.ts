import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
// add onLogin to determine which elements to display based on user's credentials
  isSuperUser = true;
  constructor() { }

  ngOnInit() {
  }

}
