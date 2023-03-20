import { Inject, Injectable, InjectionToken } from '@angular/core';
/*
@Injectable({
  providedIn: 'root',
})*/

export const TAUX_TVA = new InjectionToken('le taux de tva');
@Injectable()
export class TaxesService {
  total = 0;

  constructor(@Inject(TAUX_TVA) private tauxDeTVA: number) {
    console.log('je suis le TAxes serviece N°', Math.random());
  }

  calculate(revenu: number) {
    console.log('5 appels HTTP');

    this.total += revenu;
    // 500 lignes de calcul
    // contenant en plus des appels HTTP
    return revenu + 500;
  }
}
