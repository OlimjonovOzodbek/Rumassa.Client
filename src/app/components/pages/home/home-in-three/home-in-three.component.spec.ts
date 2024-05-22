import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInThreeComponent } from './home-in-three.component';

describe('HomeInThreeComponent', () => {
  let component: HomeInThreeComponent;
  let fixture: ComponentFixture<HomeInThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeInThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeInThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
