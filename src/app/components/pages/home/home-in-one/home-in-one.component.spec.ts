import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInOneComponent } from './home-in-one.component';

describe('HomeInOneComponent', () => {
  let component: HomeInOneComponent;
  let fixture: ComponentFixture<HomeInOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeInOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeInOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
