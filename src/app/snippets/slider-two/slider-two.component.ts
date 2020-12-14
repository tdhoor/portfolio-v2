import { Component, Input, OnInit } from '@angular/core';
import SliderTwoItem from '../../../assets/ts/interfaces/sliderTwoItemInterface';

@Component({
  selector: 'app-slider-two',
  templateUrl: './slider-two.component.html',
  styleUrls: ['./slider-two.component.scss']
})

export class SliderTwoComponent implements OnInit {

  @Input()
  sliderItems: Array<SliderTwoItem> = [];

  currentItemIndex: number = 0;
  currentItem!: SliderTwoItem;

  constructor() { }

  ngOnInit(): void {
    this.currentItemIndex = 0;
    this.currentItem = this.sliderItems[0];
  }

  handleSliderTwoClickLeft(){
    if(this.currentItemIndex - 1 < 0){
      this.currentItemIndex = this.sliderItems.length - 1;
    } else {
      this.currentItemIndex--;
    }
    this.currentItem = this.sliderItems[this.currentItemIndex]
  }

  handleSliderTwoClickRight(){
    if(this.currentItemIndex >= this.sliderItems.length - 1){
      this.currentItemIndex = 0;
    } else {
      this.currentItemIndex++;
    }
    this.currentItem = this.sliderItems[this.currentItemIndex]
  }
}
