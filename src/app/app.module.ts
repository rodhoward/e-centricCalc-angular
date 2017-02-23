import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NumericInputComponent } from './numericInput/numericInput.component';
import { FormsModule } from '@angular/forms';
import { ConfigService, CalculateService } from './services';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CalculatorComponent, NumericInputComponent],
  bootstrap: [AppComponent],
  providers: [CalculateService, ConfigService]
})

export class AppModule { }
