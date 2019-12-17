import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpwdmailerComponent } from './forgotpwdmailer.component';

describe('ForgotpwdmailerComponent', () => {
  let component: ForgotpwdmailerComponent;
  let fixture: ComponentFixture<ForgotpwdmailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpwdmailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpwdmailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
