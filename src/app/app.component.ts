import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dashboard';
  data = [20, 10, 2, 1];
  labels = ['a', 'b', 'ciao', 'bella'];



  baseStat: string[] = ['attacco', 'vita', 'difesa']
  baseValore: number[] = [300,400,120]


}
