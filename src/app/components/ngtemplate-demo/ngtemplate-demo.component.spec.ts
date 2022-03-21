import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplateDemoComponent } from './ngtemplate-demo.component';

describe('NgtemplateDemoComponent', () => {
  let component: NgtemplateDemoComponent;
  let fixture: ComponentFixture<NgtemplateDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtemplateDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtemplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
