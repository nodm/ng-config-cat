import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgConfigCatComponent } from './ng-config-cat.component';

describe('NgConfigCatComponent', () => {
  let component: NgConfigCatComponent;
  let fixture: ComponentFixture<NgConfigCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgConfigCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgConfigCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
