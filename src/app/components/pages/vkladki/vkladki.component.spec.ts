import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VkladkiComponent } from './vkladki.component';

describe('VkladkiComponent', () => {
  let component: VkladkiComponent;
  let fixture: ComponentFixture<VkladkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VkladkiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VkladkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
