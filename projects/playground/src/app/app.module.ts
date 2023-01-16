import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { NoOpenDirective } from './no-open.directive';
import { ConfirmDirective } from './confirm.directive';
import { UserProfileComponent } from './user-profile.component';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    NoOpenDirective,
    ConfirmDirective,
    UserProfileComponent,
    CounterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
