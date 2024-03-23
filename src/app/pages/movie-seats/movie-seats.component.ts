import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { PaymentsComponent } from '../payments/payments.component';

@Component({
  selector: 'app-movie-seats',
  templateUrl: './movie-seats.component.html',
  styleUrls: ['./movie-seats.component.scss']
})
export class MovieSeatsComponent implements OnInit {

  constructor( 
    private dialogModel: MatDialog,
    public dialogRef: MatDialogRef<MovieSeatsComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { } 
  
  onCancel(): void { 
    this.dialogRef.close(); 
  } 


  ngOnInit(): void {
  }


  paymentDailog(){
    console.log('COMING>>>>>>>')
    this.dialogRef.close(); 
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.dialogModel.open(PaymentsComponent, dialogConfig); 
  
    dialogRef.afterClosed().subscribe(result => { 
      // this.animal = result; 
    }); 
  }

}
