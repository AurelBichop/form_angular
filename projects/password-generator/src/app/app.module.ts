import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PasswordGeneratorModule } from './password-generator/password-generator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, PasswordGeneratorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
