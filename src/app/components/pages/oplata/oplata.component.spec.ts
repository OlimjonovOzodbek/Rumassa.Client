import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OplataComponent } from './oplata.component';

describe('OplataComponent', () => {
  let component: OplataComponent;
  let fixture: ComponentFixture<OplataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OplataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OplataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
