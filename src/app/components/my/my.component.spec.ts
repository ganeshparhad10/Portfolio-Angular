import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYComponent } from './my.component';

describe('MYComponent', () => {
  let component: MYComponent;
  let fixture: ComponentFixture<MYComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MYComponent]
    });
    fixture = TestBed.createComponent(MYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
