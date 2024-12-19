import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsdDashboardComponent } from './productsd-dashboard.component';

describe('ProductsdDashboardComponent', () => {
  let component: ProductsdDashboardComponent;
  let fixture: ComponentFixture<ProductsdDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsdDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsdDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
