import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger("cardFlip", [
      state(
        "default",
        style({
          transform: "none"
        })
      ),
      state(
        "flipped",
        style({
          transform: "rotateY(180deg)"
        })
      ),
      state(
        "matched",
        style({
          visibility: "false",
          transform: "scale(0.05)",
          opacity: 0
        })
      ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")]),
      transition("* => matched", [animate("400ms")])
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() shapeType: any;
  @Input() canFlip: any;
  @Input() hide: any;

  ngOnChanges(changes: SimpleChanges) {
        
    this.flip(changes['hide']?.currentValue);
  }
  async flip(hid : any){
    if(this.hide && this.canFlip){
      this.hide = false;
      await this.delay(1000);
      this.state = "default"
      
    }
  }

  state= "default";

  constructor() { }

  ngOnInit(): void {
  }
  async cardClicked() {

      if (this.state === "default") {
        this.state = "flipped";
        
      }
    
    
    
  }
  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
