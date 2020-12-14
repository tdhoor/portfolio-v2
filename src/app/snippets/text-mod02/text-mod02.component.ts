import { Component, Input, OnInit } from '@angular/core';
import textMod02Interface from 'src/assets/ts/interfaces/textMod02Interface';

@Component({
  selector: 'app-text-mod02',
  templateUrl: './text-mod02.component.html',
  styleUrls: ['./text-mod02.component.scss']
})
export class TextMod02Component implements OnInit {

  @Input()
  item!: textMod02Interface;

  boxes: any;


  constructor() { }

  ngOnInit(): void {
    this.boxes = this.item.boxes;
  }
  
  stri(value: object): string {
    return JSON.stringify(value);
  }
}
