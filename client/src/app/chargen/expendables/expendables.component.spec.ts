import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpendablesComponent } from './expendables.component';

describe('ExpendablesComponent', () => {
  let component: ExpendablesComponent;
  let fixture: ComponentFixture<ExpendablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpendablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpendablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
