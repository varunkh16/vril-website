import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-services-dialog',
  templateUrl: './services-dialog.component.html',
  styleUrls: ['./services-dialog.component.css']
})
export class ServicesDialogComponent implements OnInit {

  testingType:String = '';

  constructor(public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.testingType = this.data.testingType;
  }

}
