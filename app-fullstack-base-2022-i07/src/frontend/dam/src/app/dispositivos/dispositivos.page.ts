import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit {

  enable = false;
  listado: any[] = [];

  constructor(
    private _dispositivoService: DispositivoService,
    private navCtrl: NavController,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  handleItemClick(elemento: any) {
    console.log("Item clicked");
    this.router.navigate(['detalle-galga'], {
      state: { elemento }
    });
  }

  enableOn() {
    this.enable = true;
    this._dispositivoService.getListadoDispositivos().subscribe(
      (Response) => {
        this.listado = Response as any[];
      },
      (error) => {
        console.error('Error al obtener los dispositivos');
      }
    );
  }
  disableOn(){
    this.enable = false;
  }
}
