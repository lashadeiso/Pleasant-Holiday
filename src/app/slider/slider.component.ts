import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  hotelSliderData!: any;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.hotelSliderData = this.data.hotelSliderData;
  }
}
