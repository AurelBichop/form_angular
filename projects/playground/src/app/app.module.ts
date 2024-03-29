import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives-attributs/highlight.directive';
import { NoOpenDirective } from './directives-attributs/no-open.directive';
import { ConfirmDirective } from './directives-attributs/confirm.directive';
import { UserProfileComponent } from './components/user-profile.component';
import { CounterComponent } from './components/counter.component';
import { ModelDirective } from './directives-attributs/model.directive';
import { FormsModule } from '@angular/forms';
import { SetClassesDirective } from './directives-attributs/set-classes.directive';
import { ForceLowerDirective } from './directives-attributs/force-lower.directive';
import { NewsletterComponent } from './components/newsletter.component';
import { CardComponent } from './components/card.component';
import { IfDirective } from './directives-structurelles/if.directive';
import { LoopDirective } from './directives-structurelles/loop.directive';
import { RepeatDirective } from './directives-structurelles/repeat.directive';
import { DeclarationComponent } from './components/declaration.component';
import { RecapComponent } from './components/recap.component';
import { TAUX_TVA, TaxesService } from './services/taxes.service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    NoOpenDirective,
    ConfirmDirective,
    UserProfileComponent,
    CounterComponent,
    ModelDirective,
    SetClassesDirective,
    ForceLowerDirective,
    NewsletterComponent,
    CardComponent,
    IfDirective,
    LoopDirective,
    RepeatDirective,
    DeclarationComponent,
    RecapComponent,
  ],
  imports: [BrowserModule, FormsModule],
  //providers: [],
  providers: [
    TaxesService,
    {
      provide: TAUX_TVA,
      useValue: 0.2,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
