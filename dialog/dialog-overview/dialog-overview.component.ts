import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../dialog/dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent {

  subject:string;
  Name:string;
Form:FormGroup;
  constructor(public dialogRef:MatDialogRef<DialogOverviewComponent>,@Inject(MAT_DIALOG_DATA) public data:DialogData, private fb:FormBuilder) { 
    this.Form=this.fb.group({
  subject:[null, Validators.required]
    })
  }
onNoClick():void{
  this.dialogRef.close();
}

}
