import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInFourComponent } from './home-in-four.component';

describe('HomeInFourComponent', () => {
  let component: HomeInFourComponent;
  let fixture: ComponentFixture<HomeInFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeInFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeInFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
