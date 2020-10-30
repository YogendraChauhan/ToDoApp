import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClicksComponent } from './menu-clicks.component';

describe('MenuClicksComponent', () => {
  let component: MenuClicksComponent;
  let fixture: ComponentFixture<MenuClicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuClicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
