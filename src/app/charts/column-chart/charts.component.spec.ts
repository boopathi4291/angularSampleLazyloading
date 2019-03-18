import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnChartsComponent } from './charts.component';

describe('ChartsComponent', () => {
  let component: ColumnChartsComponent;
  let fixture: ComponentFixture<ColumnChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
