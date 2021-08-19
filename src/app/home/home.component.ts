import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagesList = ['../../assets/images/lab-image1.jpg','../../assets/images/lab-image2.jpg','../../assets/images/lab-image3.jpg'];
  activeImage = this.imagesList[0];
  index = 0;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.changeImage();
    }, 10000);
  }

  changeImage() {
    //SET the index for next image
    if(this.index < this.imagesList.length-1) {
      this.index++;
    } else {
      this.index = 0;
    }
    setTimeout(() => {
      //SET SRC TO FILE FROM PROMOTIONS
      this.activeImage = this.imagesList[this.index];
      this.changeImage();
    }, 10000);
  }

}
