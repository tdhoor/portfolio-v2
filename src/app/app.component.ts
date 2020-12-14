import { Component } from '@angular/core';

import COMPANIES from '../assets/ts/utils/companies';
import PROJECTS from '../assets/ts/utils/projects';
import ABOUTME from '../assets/ts/utils/aboutMe';
import FURTHER_STUFF from '../assets/ts/utils/furtherStuff';

import SliderOneItem from '../assets/ts/interfaces/sliderOneItemInterface';
import SliderTwoItem from '../assets/ts/interfaces/sliderTwoItemInterface';
import AboutMeInterface from 'src/assets/ts/interfaces/aboutMeInterface';
import TextMod02Interface from 'src/assets/ts/interfaces/textMod02Interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portfolio-v2';
  navItems: Array<string>;
  
  companies: Array<SliderOneItem>;
  projects: Array<SliderTwoItem>;
  aboutMe: AboutMeInterface;
  furtherStuff: TextMod02Interface;


  constructor(){
    this.title = 'portfolio-v2';
    this.navItems = ['menu', 'about', 'experience', 'projects', 'educations'];
    this.companies = COMPANIES;
    this.projects = PROJECTS;
    this.aboutMe = ABOUTME;
    this.furtherStuff = FURTHER_STUFF;
  }

  ngOnInit(): void {    
    // window.scrollTo(0, 1);
  }
}
