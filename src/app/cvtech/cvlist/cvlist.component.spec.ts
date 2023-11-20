import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvlistComponent } from './cvlist.component';

describe('CvlistComponent', () => {
  let component: CvlistComponent;
  let fixture: ComponentFixture<CvlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvlistComponent]
    });
    fixture = TestBed.createComponent(CvlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
