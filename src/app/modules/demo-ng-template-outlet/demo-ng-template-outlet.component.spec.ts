import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgTemplateOutletComponent } from './demo-ng-template-outlet.component';

describe('DemoNgTemplateOutletComponent', () => {
  let component: DemoNgTemplateOutletComponent;
  let fixture: ComponentFixture<DemoNgTemplateOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoNgTemplateOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
