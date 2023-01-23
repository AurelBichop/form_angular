import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('AppComponent (avec Spectator)', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [AppComponent],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should work', () => {
    const article = spectator.query('article');
    expect(article?.textContent).toBe('Cliquez sur le bouton "Générer"');
  });

  it('should change message when user clicks generate button', async () => {
    spectator.click('button');
    expect(spectator.query('article')).toHaveText('MON MDPde_OUF');
  });

  it('should update settings when user clicks on checkboxes', async () => {
    spectator.click('#uppercase');
    expect(component.uppercase).toBeTrue();

    spectator.click('#numbers');
    expect(component.numbers).toBeTrue();

    spectator.click('#symbols');
    expect(component.symbols).toBeTrue();

    spectator.typeInElement('33', '#length');
    expect(component.length).toBe(33);
  });
});

describe('AppComponent (avec TestBed)', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();

    component = fixture.componentInstance;
  });

  it('should work', async () => {
    const article = fixture.nativeElement.querySelector('article');
    expect(article.textContent).toBe('Cliquez sur le bouton "Générer"');
  });

  it('should change message when user clicks generate button', async () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();

    const article = fixture.nativeElement.querySelector('article');
    expect(article.textContent).toBe('MON MDPde_OUF');
  });

  it('should update settings when user clicks on checkboxes', async () => {
    fixture.nativeElement.querySelector('#uppercase').click();
    expect(component.uppercase).toBeTrue();

    fixture.nativeElement.querySelector('#numbers').click();
    expect(component.numbers).toBeTrue();

    fixture.nativeElement.querySelector('#symbols').click();
    expect(component.symbols).toBeTrue();

    const length = fixture.nativeElement.querySelector('#length');
    length.value = 33;
    length.dispatchEvent(new Event('input'));
    expect(fixture.componentInstance.length).toBe(33);
  });
});
