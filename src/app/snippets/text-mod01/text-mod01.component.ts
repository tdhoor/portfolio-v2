import { Component, Input, OnInit } from '@angular/core';
import AboutMeInterface from 'src/assets/ts/interfaces/aboutMeInterface';




@Component({
  selector: 'app-text-mod01',
  templateUrl: './text-mod01.component.html',
  styleUrls: ['./text-mod01.component.scss']
})


export class TextMod01Component implements OnInit {

  @Input()
  item!: AboutMeInterface;

  constructor() { }

  ngOnInit(): void {
    this.item.text = this.transform(this.item.text)
  }

  transform(value: string): string {
    return value.replace(/\n/g,'<br>');
  }
}
