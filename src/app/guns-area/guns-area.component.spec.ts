import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunsAreaComponent } from './guns-area.component';

describe('GunsAreaComponent', () => {
  let component: GunsAreaComponent;
  let fixture: ComponentFixture<GunsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GunsAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GunsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
