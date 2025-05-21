import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFucsiaFlowComponent } from './perfil-fucsia-flow.component';

describe('PerfilFucsiaFlowComponent', () => {
  let component: PerfilFucsiaFlowComponent;
  let fixture: ComponentFixture<PerfilFucsiaFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilFucsiaFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilFucsiaFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
