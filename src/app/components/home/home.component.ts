import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public appRoutes = AppRoutes;
  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  loadNewGame(){
    this.router.navigate([this.appRoutes.board]);
  }

}
