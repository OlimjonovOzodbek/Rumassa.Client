import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInTwoComponent } from './home-in-two.component';

describe('HomeInTwoComponent', () => {
  let component: HomeInTwoComponent;
  let fixture: ComponentFixture<HomeInTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeInTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeInTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
