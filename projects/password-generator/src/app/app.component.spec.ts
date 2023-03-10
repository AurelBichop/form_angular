import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { FormsModule } from '@angular/forms';
import { PasswordDisplayComponent } from './components/password-display.component';
import { PasswordControlsComponent } from './components/password-controls.component';
import { PasswordSettingsComponent } from './components/password-settings.component';

describe('AppComponent (avec Spectator)', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [
      AppComponent,
      PasswordDisplayComponent,
      PasswordControlsComponent,
      PasswordSettingsComponent,
    ],
    imports: [FormsModule],
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
    expect(component.settings.uppercase).toBeTrue();

    spectator.click('#numbers');
    expect(component.settings.numbers).toBeTrue();

    spectator.click('#symbols');
    expect(component.settings.symbols).toBeTrue();

    spectator.typeInElement('33', '#length');
    expect(component.settings.length).toBe(33);
  });
});

describe('AppComponent (avec TestBed)', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PasswordDisplayComponent,
        PasswordControlsComponent,
        PasswordSettingsComponent,
      ],
      imports: [FormsModule],
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
    expect(component.settings.uppercase).toBeTrue();

    fixture.nativeElement.querySelector('#numbers').click();
    expect(component.settings.numbers).toBeTrue();

    fixture.nativeElement.querySelector('#symbols').click();
    expect(component.settings.symbols).toBeTrue();

    const length = fixture.nativeElement.querySelector('#length');
    length.value = 33;
    length.dispatchEvent(new Event('input'));
    expect(fixture.componentInstance.settings.length).toBe(33);
  });
});
