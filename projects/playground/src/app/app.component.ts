import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Découverte Angular</h1>

  <a no-open href="https://framasoft.org"> Framasoft !</a>
  
  <counter [initial-value]="10" [step]="5"></counter>
  
  <a confirm confirm-message="Tu es sure de toi !" href="https://www.linux.org">
    Linux !</a
  >
  
  <user-profile
    first-name="Aurel"
    last-name="Bichop"
    job="Developpeur"
    [hired]="true"
  ></user-profile>
  <user-profile
    first-name="Aurel"
    last-name="Bichop"
    job="Developpeur"
    [hired]="false"
  ></user-profile>
  
  <p highlight background-color="green" base-color="grey">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo consectetur
    deserunt, asperiores iure cum.
  </p>
  
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nulla
    asperiores. Rerum ipsam eius sit error, molestias omnis. Et ipsum alias, eos
    voluptas officia deserunt.
  </p>
  
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, impedit.
    Distinctio numquam ipsum magnam magni quibusdam consectetur voluptate illo.
    Laboriosam atque sed iure? Voluptate, officiis!
  </p>
  `,
  styles: []
})
export class AppComponent {
  title = 'playground';
}
