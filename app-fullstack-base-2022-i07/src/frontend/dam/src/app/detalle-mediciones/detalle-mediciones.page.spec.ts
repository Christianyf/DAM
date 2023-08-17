import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleMedicionesPage } from './detalle-mediciones.page';

describe('DetalleMedicionesPage', () => {
  let component: DetalleMedicionesPage;
  let fixture: ComponentFixture<DetalleMedicionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleMedicionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
