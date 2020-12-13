import { Component, Input, OnInit } from '@angular/core';
const NAV_PLACEHOLDER = "menu";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  @Input()
  navItems: Array<string> = [];

  private activeNavItemIndex: number = 0;
  private pageSections: any;
  private navBar: any;
  private scroll = {
    lastScroll: 0,
    maxScroll: 0,
    reachTopOrBottom: true
  }

  constructor() {}

  ngOnInit(): void {
    this.initElements();
    this.initEventListener();
  }
  
  initElements(): void {   
    this.pageSections = document.querySelectorAll("div[class^='section']");
    this.navBar = document.querySelectorAll('.nav-container')[0];
    
    this.scroll.maxScroll = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  }

  initEventListener(): void {
    window.addEventListener('scroll', () => {
      this.scroll.reachTopOrBottom = window.pageYOffset <= 1 
        || this.scroll.maxScroll <= window.innerHeight + window.pageYOffset + 10;
      const scroll =  window.pageYOffset || document.documentElement.scrollTop;
      this.handleNavEffect(scroll);
      this.handleActiveSection();
    });
    window.addEventListener('resize', () => {
      this.initElements();
    });
  }

  handleNavEffect(scroll: number): void {
    if (this.scroll.lastScroll < scroll && !this.scroll.reachTopOrBottom) {
      if(!this.navBar.classList.contains('hide')){
        this.navBar.classList.add('hide');
      }
    } else {
      if(this.navBar.classList.contains('hide')){
        this.navBar.classList.remove('hide');
      }
    } 
    this.scroll.lastScroll = scroll <= 0 ? 0 : scroll;
  }

  handleActiveSection(): void {
    this.pageSections.forEach((element: any, index: number) => {
      const {bottom, height } = element.getBoundingClientRect();

      if(bottom - (height / 2)  <= height && bottom - height / 2  >= 0){
        this.updateActiveNavItem(index);
      }          
    });
  }

  updateActiveNavItem(index: number) : void {   
    if(this.activeNavItemIndex === index){
      return
    }
   
    this.activeNavItemIndex = index;

    if(this.activeNavItemIndex === 0 || this.activeNavItemIndex === 5){
      this.navItems[0] = NAV_PLACEHOLDER;
    } else {
      this.navItems[0] = this.navItems[this.activeNavItemIndex];
    }
  }

  /**
   * Catch child on click event, update activeNavItem and scroll to the right section.
   * @param navItem : clicked item
   */
  navItemOnClick(navItem: string): void{
    const index = this.navItems.findIndex(item => item === navItem);
    this.navItems[index] = navItem;

    const { offsetTop } = this.pageSections[index];
    window.scrollTo({ top: offsetTop, behavior: 'smooth' })
  }
}
