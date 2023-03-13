export class TaxesService {
  calculate(revenu: number) {
    console.log('5 appels HTTP');
    // 500 lignes de calcul
    // contenant en plus des appels HTTP
    return revenu + 1000;
  }
}
