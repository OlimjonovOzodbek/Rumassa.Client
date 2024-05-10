import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaciboComponent } from './cpacibo.component';

describe('CpaciboComponent', () => {
  let component: CpaciboComponent;
  let fixture: ComponentFixture<CpaciboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpaciboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpaciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
