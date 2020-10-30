import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() menuClick = new EventEmitter<boolean>();
  menuCollapsed: boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCollapsed = !this.menuCollapsed;
    this.menuClick.emit(this.menuCollapsed);
  }
}
