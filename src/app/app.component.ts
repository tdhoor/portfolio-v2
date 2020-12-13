import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portfolio-v2';
  navItems: Array<string>;
  
  constructor(){
    this.title = 'portfolio-v2';
    this.navItems = ['menu', 'about', 'experience', 'projects', 'educations'];
  }

  ngOnInit(): void {

  }
}
