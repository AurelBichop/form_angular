import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should work', async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents;

    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    const article = fixture.nativeElement.querySelector('article');
    expect(article.textContent).toBe('Cliquez sur le bouton "Générer"');
  });
});
