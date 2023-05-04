import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dashboard';
  data = [[20, 10, 2, 1], [1, 2, 3]];
  labels = ['a', 'b', 'ciao', 'bella'];
}
