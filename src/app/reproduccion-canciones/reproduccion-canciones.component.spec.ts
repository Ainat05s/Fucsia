import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproduccionCancionesComponent } from './reproduccion-canciones.component';

describe('ReproduccionCancionesComponent', () => {
  let component: ReproduccionCancionesComponent;
  let fixture: ComponentFixture<ReproduccionCancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReproduccionCancionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReproduccionCancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
