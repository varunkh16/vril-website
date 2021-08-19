import { Component, OnInit } from '@angular/core';
import { ServicesDialogComponent } from '../services-dialog/services-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(event) {
    let eventString = event;
    let testingType = '';

    if (eventString.toLowerCase().indexOf("chemical") > -1) {
      testingType = "Chemical Testing";
    } else if (eventString.toLowerCase().indexOf("mechanical") > -1) {
      testingType = "Mechanical Testing";
    } else if (eventString.toLowerCase().indexOf("water") > -1) {
      testingType = "Water Testing";
    } else if (eventString.toLowerCase().indexOf("metallurgical") > -1) {
      testingType = "Metallurgical Testing";
    } else if (eventString.toLowerCase().indexOf("polymer") > -1) {
      testingType = "Polymer Testing";
    } else if (eventString.toLowerCase().indexOf("special") > -1) {
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

}
