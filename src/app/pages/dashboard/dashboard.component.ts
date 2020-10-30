import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ChartDataSets } from 'chart.js';
import * as _ from 'lodash';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  loading: boolean;
  chartloading: boolean;
  userList: any = [];
  showMoreCards: boolean;
  chartData: ChartDataSets[];

  chartLabels: Label[] = ['Number Of Posts'];
  constructor(private service: DashboardService) { }

  ngOnInit() {
    /* fetch user details on init */
    this.getAllActiveUsers();

    /* fetch user posts */
    this.getPosts();
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

  getPosts() {
    this.service.getUserPosts().subscribe((response: any) => {
      this.chartloading = false;
      const posts = _.groupBy(response, 'userId');
      this.chartData = [];
      Object.keys(posts).map((key) => {
        this.chartData.push({ data: [posts[key].length], label: 'User ' + key });
      });
    }, (error) => {
      this.chartloading = false;
      /* show alert with error message here */
    });
  }

  toggleShowMoreCards() {
    this.showMoreCards = !this.showMoreCards;
  }
}
