import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalgaUpdateService {

  constructor() { }
  private updateChartValueSource = new BehaviorSubject<number>(0);//es null en lugar de cero
  updateChartValue$ = this.updateChartValueSource.asObservable();

  triggerChartUpdate(value: number){
    this.updateChartValueSource.next(value);
  }
}
