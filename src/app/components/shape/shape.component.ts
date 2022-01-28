import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {
  @Input() shapeType: any;


  IsCircle: boolean = false;
  IsTriangle: boolean = false;
  IsSquare: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(this.shapeType == "square") this.IsSquare = true;
    if(this.shapeType == "circle") this.IsCircle = true;
    if(this.shapeType == "triangle") this.IsTriangle = true;

  }

}
