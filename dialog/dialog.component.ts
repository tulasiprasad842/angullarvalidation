import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData{
  subject:string;
  Name:string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent   {
  Form:FormGroup;
  subject: string;
  Name: string;

  constructor(public dialog:MatDialog, private fb:FormBuilder) { 
    this.Form=this.fb.group({
    Name:[null, Validators.required]
    })
  }
  openDialog():void{
    const dialogRef=this.dialog.open(DialogOverviewComponent, {
      width: '250px',
      data: {Name: this.Name, subject: this.subject}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.subject = result;
    });
  }

}
