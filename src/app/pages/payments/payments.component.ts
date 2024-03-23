import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  constructor( 
    public dialogRef: MatDialogRef<PaymentsComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { } 
  
  onCancel(): void { 
    this.dialogRef.close(); 
  } 

  ngOnInit(): void {
  }

}
