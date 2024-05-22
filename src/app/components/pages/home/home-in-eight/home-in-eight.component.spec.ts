import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInEightComponent } from './home-in-eight.component';

describe('HomeInEightComponent', () => {
  let component: HomeInEightComponent;
  let fixture: ComponentFixture<HomeInEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeInEightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeInEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
