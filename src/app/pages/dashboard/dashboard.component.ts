import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  loading: boolean;
  userList: any = [];
  showMoreCards: boolean;
  constructor(private service: DashboardService) { }

  ngOnInit() {
    /* fetch user details on init */
    this.getAllActiveUsers();
  }

  getAllActiveUsers() {
    this.loading = true;
    this.service.getActiveUsers().subscribe((response: any) => {
      this.loading = false;
      this.userList = response;
    }, (error) => {
      this.loading = false;
      /* show alert with error message here */
    });
  }

  toggleShowMoreCards() {
    this.showMoreCards = !this.showMoreCards;
  }
}
