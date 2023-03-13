export class TaxesService {
  total = 0;

  constructor() {
    console.log('je suis le TAxes serviece N°', Math.random());
  }

  calculate(revenu: number) {
    console.log('5 appels HTTP');

    this.total += revenu;
    // 500 lignes de calcul
    // contenant en plus des appels HTTP
    return revenu + 1000;
  }
}
