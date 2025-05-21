import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicoFucsiaFlowComponent } from './inico-fucsia-flow.component';

describe('InicoFucsiaFlowComponent', () => {
  let component: InicoFucsiaFlowComponent;
  let fixture: ComponentFixture<InicoFucsiaFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicoFucsiaFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicoFucsiaFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
