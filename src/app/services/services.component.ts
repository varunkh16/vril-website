import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ServicesDialogComponent } from '../services-dialog/services-dialog.component';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog(event) {
    let eventString = event;
    let testingType = '';

    if (eventString.toString().indexOf("chemical") > -1) {
      testingType = "Chemical Testing";
    } else if (eventString.toString().indexOf("mechanical") > -1) {
      testingType = "Mechanical Testing";
    } else if (eventString.toString().indexOf("water") > -1) {
      testingType = "Water Testing";
    } else if (eventString.toString().indexOf("metallurgical") > -1) {
      testingType = "Metallurgical Testing";
    } else if (eventString.toString().indexOf("polymer") > -1) {
      testingType = "Polymer Testing";
    } else if (eventString.toString().indexOf("special") > -1) {
      testingType = "Special Testing";
    }

    if (testingType != '') {
      const dialogRef = this.dialog.open(ServicesDialogComponent,{
        data: {testingType: testingType}
      });

      dialogRef.afterClosed().subscribe(result => {
        testingType='';
      });
    }
  }

  ngOnInit(): void {
  }

}
