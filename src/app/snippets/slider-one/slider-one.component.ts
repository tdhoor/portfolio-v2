import { Component, Input, OnInit } from '@angular/core';
import SliderOneItem from '../../../assets/ts/interfaces/sliderOneItem';

@Component({
  selector: 'app-slider-one',
  templateUrl: './slider-one.component.html',
  styleUrls: ['./slider-one.component.scss']
})

export class SliderOneComponent implements OnInit {

  @Input()
  sliderItems: Array<SliderOneItem> = [];
  @Input()
  title: string = '';

  currentItemIndex: number = 0;
  currentItem?: SliderOneItem;

  constructor() {}

  ngOnInit(): void {
    this.currentItemIndex = 0;
    this.currentItem = this.sliderItems[0];
  }

  handleSliderOneClickLeft(){
    if(this.currentItemIndex - 1 < 0){
      this.currentItemIndex = this.sliderItems.length - 1;
    } else {
      this.currentItemIndex--;
    }
    this.currentItem = this.sliderItems[this.currentItemIndex]
  }

  handleSliderOneClickRight(){
    if(this.currentItemIndex >= this.sliderItems.length - 1){
      this.currentItemIndex = 0;
    } else {
      this.currentItemIndex++;
    }
    this.currentItem = this.sliderItems[this.currentItemIndex]
  }
}
