import { TestBed } from '@angular/core/testing';
import { DeclarationComponent } from './declaration.component';
import { TAUX_TVA, TaxesService } from '../services/taxes.service';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

// class FakeService {
//   calculate(revenu: number) {
//     return revenu + 500;
//   }
// }

// const fakeService = new FakeService();

describe('Déclaration component avec testBed', () => {
  it('should show taxes results', () => {
    TestBed.configureTestingModule({
      declarations: [DeclarationComponent],
      providers: [
        TaxesService,
        {
          provide: TAUX_TVA,
          useValue: 0.2,
        },
      ],
    });

    // TestBed.overrideComponent(DeclarationComponent, {
    //   set: {
    //     providers: [
    //       {
    //         provide: TaxesService,
    //         useClass: FakeService,
    //       },
    //     ],
    //   },
    // });

    const fixture = TestBed.createComponent(DeclarationComponent);
    fixture.autoDetectChanges(true);

    const service = TestBed.inject(TaxesService);
    const spy = spyOn(service, 'calculate');
    spy.and.callFake((revenu: number) => revenu + 500);

    //const service = fixture.debugElement.injector.get(TaxesService);

    /*
    const spy = spyOn(service, 'calculate');
    spy.and.callFake((revenu: number) => {
      return revenu + 500;
    }); 
    */

    /*
    service.calculate = (revenu: number) => {
      console.log('Aucun appel HTTP');
      return revenu + 500;
    };
    */
    // Quand je rentre un montant dans l'input
    const input = fixture.nativeElement.querySelector('input');
    input.value = '2000';
    // Si je clique sur le bouton
    fixture.nativeElement.querySelector('button').click();
    // Alors je devrais voir le résultat dans <article>
    expect(
      fixture.nativeElement.querySelector('article').textContent
    ).toContain('2500');
  });

  describe('Déclaration component avec Spectator', () => {
    let spectator: Spectator<DeclarationComponent>;

    const createSpectator = createComponentFactory({
      component: DeclarationComponent,
      providers: [TaxesService, { provide: TAUX_TVA, useValue: 0.2 }],
      mocks: [TaxesService],
    });

    it('should show taxes results', () => {
      spectator = createSpectator();

      const service = spectator.inject(TaxesService);
      service.calculate.and.returnValue(2500);
      // const spy = spyOn(service, 'calculate');
      // spy.and.returnValue(2500);

      // Je rentre 2000 dans l'input
      spectator.typeInElement('2000', 'input');

      // Je clieck sur le bouton
      spectator.click('button');

      // je dois voir 2500 dans <article>
      expect(spectator.query('article')).toHaveText('2500');
    });
  });
});
