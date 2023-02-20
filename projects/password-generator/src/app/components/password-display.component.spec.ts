import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordDisplayComponent } from './password-display.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `<password-display message="MOCK_MESSAGE"></password-display>`,
})
class TestComponent {}

describe('PasswordDisplayComponent (avec TestBed)', () => {
  it('should display the input message', () => {
    TestBed.configureTestingModule({
      declarations: [PasswordDisplayComponent, TestComponent],
    });

    const fixture = TestBed.createComponent(TestComponent);
    fixture.autoDetectChanges();

    const article = fixture.nativeElement.querySelector('article');

    expect(article.textContent).toContain('MOCK_MESSAGE');
  });
});

describe('PasswordDisplayComponent (avec Spectator)', () => {
  let spectator: Spectator<TestComponent>;

  const createComponent = createComponentFactory({
    component: TestComponent,
    declarations: [PasswordDisplayComponent],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should display the input message', () => {
    expect(spectator.query('article')).toHaveText('MOCK_MESSAGE');
  });
});
