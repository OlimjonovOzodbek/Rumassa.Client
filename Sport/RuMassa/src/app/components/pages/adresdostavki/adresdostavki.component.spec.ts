import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresdostavkiComponent } from './adresdostavki.component';

describe('AdresdostavkiComponent', () => {
  let component: AdresdostavkiComponent;
  let fixture: ComponentFixture<AdresdostavkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdresdostavkiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdresdostavkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
