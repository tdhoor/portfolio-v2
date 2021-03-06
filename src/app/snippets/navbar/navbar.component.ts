import { Component, Input, OnInit } from '@angular/core';
const NAV_PLACEHOLDER = "menu";
const DISPLAY_MD = 768;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  
  @Input()
  navItems!: Array<string>;

  private activeNavItemIndex: number = 0;
  private pageSections: any;
  private navBar: any;
  private scroll = {
    lastScroll: 0,
    maxScroll: 0,
    reachTopOrBottom: true
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initElements();
    this.initVariables();
    this.initEventListener();
  }
  
  initElements(): void {   
    this.pageSections = document.querySelectorAll(".section");
    this.navBar = document.querySelectorAll('.nav-container')[0];
  }

  initVariables(): void {
    this.scroll.maxScroll = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    this.scroll.reachTopOrBottom = window.pageYOffset <= 1 
    || this.scroll.maxScroll <= window.innerHeight + window.pageYOffset + 10;
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
      this.initVariables();
    });
  }

  handleNavEffect(scroll: number): void {
    if(window.innerWidth <= DISPLAY_MD  && this.scroll.lastScroll > scroll){
      this.scroll.lastScroll = scroll <= 0 ? 0 : scroll;      
      return;
    }
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
      const { bottom, top } = element.getBoundingClientRect();
      
      if(top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
        this.updateActiveNavItem(index)
      }          
    });
  }

  updateActiveNavItem(index: number) : void {   
    if(this.activeNavItemIndex === index){
      return
    }

    this.activeNavItemIndex = index;

    if(this.activeNavItemIndex === 0 || this.activeNavItemIndex === this.pageSections.length - 1){
      this.navItems[0] = NAV_PLACEHOLDER;
    } else {
      this.navItems[0] = this.navItems[this.activeNavItemIndex];
    }
  }

  /**
   * Catch child on click event, update activeNavItem and scroll to the right section.
   * @param navItem : clicked item
   */
  navItemOnClick(navItem: any): void{
    const index = this.navItems.findIndex((item, index) => item === navItem && index !== 0);
    this.navItems[index] = navItem;
    
    this.pageSections[index].scrollIntoView({
      behavior: 'smooth'
  });
  }

  toggleHideNavbar(): void {
    if(window.innerWidth <= DISPLAY_MD){
      this.navBar.classList.toggle('hide')
    }
  }
}
