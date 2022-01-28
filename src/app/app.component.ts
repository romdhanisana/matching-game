import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matching-game';
  

  constructor() { }

}
