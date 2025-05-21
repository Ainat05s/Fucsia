import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFucsiaFlowComponent } from './login-fucsia-flow.component';

describe('LoginFucsiaFlowComponent', () => {
  let component: LoginFucsiaFlowComponent;
  let fixture: ComponentFixture<LoginFucsiaFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFucsiaFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFucsiaFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
