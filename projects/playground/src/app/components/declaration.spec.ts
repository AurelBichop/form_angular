import { TestBed } from '@angular/core/testing';
import { DeclarationComponent } from './declaration.component';
import { TaxesService } from '../services/taxes.service';

describe('Déclaration component avec testBed', () => {
  it('should show taxes results', () => {
    TestBed.configureTestingModule({
      declarations: [DeclarationComponent],
    });

    const fixture = TestBed.createComponent(DeclarationComponent);
    fixture.autoDetectChanges(true);

    const service = fixture.debugElement.injector.get(TaxesService);

    service.calculate = (revenu: number) => {
      console.log('Aucun appel HTTP');
      return revenu + 500;
    };

    // Quand je rentre un montant dans l'input
    const input = fixture.nativeElement.querySelector('input');
    input.value = '1000';
    // Si je clique sur le bouton
    fixture.nativeElement.querySelector('button').click();
    // Alors je devrais voir le résultat dans <article>
    expect(
      fixture.nativeElement.querySelector('article').textContent
    ).toContain('1500');
  });
});
