import { Component } from '@angular/core';

@Component({
  selector: 'sb-env-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngapp';

  constructor() {
    console.log('Hello', process.env['KATERINA']);
  }
}
