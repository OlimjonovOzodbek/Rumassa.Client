import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObmeniComponent } from './obmeni.component';

describe('ObmeniComponent', () => {
  let component: ObmeniComponent;
  let fixture: ComponentFixture<ObmeniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObmeniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObmeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
