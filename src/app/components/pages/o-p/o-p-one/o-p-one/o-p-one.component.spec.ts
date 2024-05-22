import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPOneComponent } from './o-p-one.component';

describe('OPOneComponent', () => {
  let component: OPOneComponent;
  let fixture: ComponentFixture<OPOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OPOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OPOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
