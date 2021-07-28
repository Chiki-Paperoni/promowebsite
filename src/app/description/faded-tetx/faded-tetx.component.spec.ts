import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadedTetxComponent } from './faded-tetx.component';

describe('FadedTetxComponent', () => {
  let component: FadedTetxComponent;
  let fixture: ComponentFixture<FadedTetxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FadedTetxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FadedTetxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
