import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryfeatureComponent } from './enquiryfeature.component';

describe('EnquiryfeatureComponent', () => {
  let component: EnquiryfeatureComponent;
  let fixture: ComponentFixture<EnquiryfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryfeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
