import { Component, Input, OnInit } from '@angular/core';
import SocialMediaInterface from 'src/assets/ts/interfaces/socialMediaInterface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  item!: SocialMediaInterface;

  constructor() { }

  ngOnInit(): void {

  }

  clickBtnMail(email: string): void {
    window.open(`mailto:${ email }`);
  }
}
