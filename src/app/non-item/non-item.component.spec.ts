import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonItemComponent } from './non-item.component';

describe('NonItemComponent', () => {
  let component: NonItemComponent;
  let fixture: ComponentFixture<NonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
