import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInNineComponent } from './home-in-nine.component';

describe('HomeInNineComponent', () => {
  let component: HomeInNineComponent;
  let fixture: ComponentFixture<HomeInNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeInNineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeInNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
