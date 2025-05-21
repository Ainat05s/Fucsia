import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarFucsiaFlowComponent } from './explorar-fucsia-flow.component';

describe('ExplorarFucsiaFlowComponent', () => {
  let component: ExplorarFucsiaFlowComponent;
  let fixture: ComponentFixture<ExplorarFucsiaFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplorarFucsiaFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorarFucsiaFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
