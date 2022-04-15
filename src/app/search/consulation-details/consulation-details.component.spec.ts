import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulationDetailsComponent } from './consulation-details.component';

describe('ConsulationDetailsComponent', () => {
  let component: ConsulationDetailsComponent;
  let fixture: ComponentFixture<ConsulationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
