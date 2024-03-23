import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

  @Input() errorMessage: string = '';
  @Output() closeDialogEvent = new EventEmitter<void>();

  constructor() {
   
  }

  ngOnInit(): void {
    
  }
  

  closeDialog() {
    this.closeDialogEvent.emit();

  }



}
