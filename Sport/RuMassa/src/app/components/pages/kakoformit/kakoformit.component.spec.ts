import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KakoformitComponent } from './kakoformit.component';

describe('KakoformitComponent', () => {
  let component: KakoformitComponent;
  let fixture: ComponentFixture<KakoformitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KakoformitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KakoformitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
