import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdCardsComponent } from './md-cards.component';

describe('MdCardsComponent', () => {
  let component: MdCardsComponent;
  let fixture: ComponentFixture<MdCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MdCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
