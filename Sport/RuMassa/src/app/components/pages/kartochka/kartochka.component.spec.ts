import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KartochkaComponent } from './kartochka.component';

describe('KartochkaComponent', () => {
  let component: KartochkaComponent;
  let fixture: ComponentFixture<KartochkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KartochkaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KartochkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
