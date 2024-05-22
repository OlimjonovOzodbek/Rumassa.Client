import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInFiveComponent } from './home-in-five.component';

describe('HomeInFiveComponent', () => {
  let component: HomeInFiveComponent;
  let fixture: ComponentFixture<HomeInFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeInFiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeInFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
