import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiestaComponent } from './fiesta.component';

describe('FiestaComponent', () => {
  let component: FiestaComponent;
  let fixture: ComponentFixture<FiestaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiestaComponent]
    });
    fixture = TestBed.createComponent(FiestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
