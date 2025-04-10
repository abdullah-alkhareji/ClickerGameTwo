import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirePowerComponent } from './fire-power.component';

describe('FirePowerComponent', () => {
  let component: FirePowerComponent;
  let fixture: ComponentFixture<FirePowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirePowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirePowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
