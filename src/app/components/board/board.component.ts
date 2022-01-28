import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppRoutes } from 'src/app/app.routes';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  display: any;
  //canFlip = true;
  
 textSec: any = "0";
  textMin: any = "0";
flips : number = 0;
  public appRoutes = AppRoutes;
  lastShapeClicked: number = -1;

  // content = [
  //    "square" ,
  //   "square" ,
  //   "triangle" ,
  //   "triangle" ,
  //   "circle" ,
  //   "circle" 
  // ];

  content = [
    { id: "square", canFlip: true, hide: 0  },
    { id: "square", canFlip: true, hide: 0 },
    { id: "triangle", canFlip: true, hide: 0 },
    { id: "triangle", canFlip: true, hide: 0 },
    { id: "circle", canFlip: true, hide: 0 },
    { id: "circle", canFlip: true, hide: 0 }
  ]

  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.content = this.shuffleArray(this.content);
    
    this.timer();
  }
  shuffleArray(array: any) {
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
  cardClicked(index: number) {
    

    if (this.content[index].canFlip && index != this.lastShapeClicked) {
      this.flips++;

      if (this.lastShapeClicked == -1) {
        this.lastShapeClicked = index;
      }
      else {
        if (this.content[index].id == this.content[this.lastShapeClicked].id) {
          this.content[index].canFlip = false;
          this.content[this.lastShapeClicked].canFlip = false;
          this.lastShapeClicked = -1;
        }
        else {
          this.content[index].hide ++;
          this.content[this.lastShapeClicked].hide ++;
          this.lastShapeClicked = -1;

        }
      }
      if(!this.content[0].canFlip
        &&!this.content[1].canFlip
        &&!this.content[2].canFlip
        &&!this.content[3].canFlip
        &&!this.content[4].canFlip
        &&!this.content[5].canFlip)
        {
          this.showResult();
        }
      
    }

  }
  quitGame() {
    this.router.navigate([this.appRoutes.home]);
  }

  timer() {
    let minutes: number = 0;
    let statSec: number = 0;

    const prefix = "00";

    const timer = setInterval(() => {



      if (statSec < 10) {
        this.textSec = "0" + statSec;
      } else this.textSec = statSec;
      if (minutes < 10) {
        this.textMin = "0" + minutes;
      } else this.textMin = minutes;

      this.display = `${this.textMin}:${this.textSec}`;
      statSec++;
      if (statSec > 59) {
        minutes++;
        statSec = 0;
      }



    }, 1000);
  }

  showResult(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      Time: this.textMin + ":" + this.textSec,
      Flips : this.flips.toString()
  };
    const dialogRef = this.dialog.open(ResultDialogComponent, dialogConfig
    
    );
    
    

    dialogRef.afterClosed().subscribe(result => {
      
      if (result) {
        result == "home"? this.router.navigate([result]) :location.reload();
      }
    });
  }

}
