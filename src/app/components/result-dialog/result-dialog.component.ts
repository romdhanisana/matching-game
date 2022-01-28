import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent implements OnInit {
winTime : string="";
winFlips : string="";
  constructor(public dialogRef: MatDialogRef<BoardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    let dialogParamter : {Time :string,Flips : string};
    dialogParamter = this.dialogRef._containerInstance._config.data;
    this.winTime = "Elapsed time : " + dialogParamter.Time;
    this.winFlips = "Flips : " + dialogParamter.Flips;
  }
  onNoClick() {
    
    this.dialogRef.close("home");
  }
 
  onYesClick() {
    
        this.dialogRef.close("board");
      
    
    
  }

}
