import { Component } from '@angular/core';

import Companies from '../assets/ts/utils/companies';
import Projects from '../assets/ts/utils/projects';

import SliderOneItem from '../assets/ts/interfaces/sliderOneItem';
import SliderTwoItem from '../assets/ts/interfaces/sliderTwoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portfolio-v2';
  navItems: Array<string>;
  
  companies: Array<SliderOneItem>
  projects: Array<SliderTwoItem>


  constructor(){
    this.title = 'portfolio-v2';
    this.navItems = ['menu', 'about', 'experience', 'projects', 'educations'];
    this.companies = Companies;
    this.projects = Projects;
  }

  ngOnInit(): void {    
    // window.scrollTo(0, 1);
  }
}
