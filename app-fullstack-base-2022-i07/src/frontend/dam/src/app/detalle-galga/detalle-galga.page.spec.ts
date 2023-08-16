import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleGalgaPage } from './detalle-galga.page';

describe('DetalleGalgaPage', () => {
  let component: DetalleGalgaPage;
  let fixture: ComponentFixture<DetalleGalgaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleGalgaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
