import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickingAreaComponent } from './clicking-area.component';

describe('ClickingAreaComponent', () => {
  let component: ClickingAreaComponent;
  let fixture: ComponentFixture<ClickingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickingAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
