import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparadiComponent } from './preparadi.component';

describe('PreparadiComponent', () => {
  let component: PreparadiComponent;
  let fixture: ComponentFixture<PreparadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreparadiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreparadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
