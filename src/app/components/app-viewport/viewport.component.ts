import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.scss']
})
export class ViewportComponent implements OnInit {
  collapsed: boolean;
  constructor() { }

  ngOnInit() {
  }
  onToggleMenu(flag) {
    this.collapsed = flag;
  }
}
