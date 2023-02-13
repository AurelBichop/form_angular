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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
