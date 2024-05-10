import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DostavkaComponent } from './dostavka.component';

describe('DostavkaComponent', () => {
  let component: DostavkaComponent;
  let fixture: ComponentFixture<DostavkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DostavkaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DostavkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
