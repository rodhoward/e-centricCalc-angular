import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>E-Centric {{name}}</h1><my-calculator></my-calculator>`,
})
export class AppComponent { name = 'Calculator'; }
