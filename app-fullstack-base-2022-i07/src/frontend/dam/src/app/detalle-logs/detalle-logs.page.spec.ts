import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleLogsPage } from './detalle-logs.page';

describe('DetalleLogsPage', () => {
  let component: DetalleLogsPage;
  let fixture: ComponentFixture<DetalleLogsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleLogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
