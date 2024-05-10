import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkidkiComponent } from './skidki.component';

describe('SkidkiComponent', () => {
  let component: SkidkiComponent;
  let fixture: ComponentFixture<SkidkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkidkiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkidkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
