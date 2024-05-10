import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoprosiComponent } from './voprosi.component';

describe('VoprosiComponent', () => {
  let component: VoprosiComponent;
  let fixture: ComponentFixture<VoprosiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoprosiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoprosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
