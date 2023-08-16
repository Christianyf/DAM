import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.scss'],
})
export class DispositivoComponent  implements OnInit {

  nombre: string="Sensor1"
  ubicacion: string="Playa"
  constructor() { }
  @Input() dispositivo: any
  ngOnInit() {}

}
