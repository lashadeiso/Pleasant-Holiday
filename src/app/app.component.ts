import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  hotelSliderData!: any;
  hotelCardsData!: any;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.hotelSliderData = this.data.hotelSliderData;
    this.hotelCardsData = this.data.hotelCardsData;
  }
}

