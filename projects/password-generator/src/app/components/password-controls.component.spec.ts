import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordControlsComponent } from './password-controls.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <password-controls (generate)="onGenerate()"></password-controls>
  `,
})
class TestComponent {
  test = false;
  onGenerate() {
    this.test = true;
  }
}

describe('PasswordControlsComponent (avec TestBed)', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordControlsComponent, TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
  });

  it('should emit an event when user clicks the button', () => {
    fixture.nativeElement.querySelector('button').click();
    expect(component.test).toBeTrue();
  });
});

describe('PasswordControlsComponent (avec Spectator)', () => {
  let spectator: Spectator<TestComponent>;

  const createComponent = createComponentFactory({
    component: TestComponent,
    declarations: [PasswordControlsComponent],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should emit an event when user clicks the button', () => {
    spectator.click('button');

    expect(spectator.component.test).toBeTrue();
  });
});
