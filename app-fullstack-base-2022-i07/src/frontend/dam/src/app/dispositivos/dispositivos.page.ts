import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service'
import { error } from 'console';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
//export class DispositivosPage implements OnInit, OnDestroy
export class DispositivosPage implements OnInit  {

  listado: any[] = [];
  constructor(private _dispositivoService: DispositivoService,private navCtrl:NavController,private router: Router) {}
  ngOnInit(): void {
    this._dispositivoService.getListadoDispositivos().subscribe(
      (Response) =>{
        this.listado = Response as any[];
      },
      (error) => {
        console.error('Error al obtener los dispositivos');
      }
    );
  }

  handleItemClick(elemento: any) {
    console.log("Item clicked");
    // this.navCtrl.navigateForward('detalle-galga${encodeURIComponent(JSON.stringify(elemento))}')
    this.router.navigate(['detalle-galga'],{
      state:{elemento}
    });
  }
}
