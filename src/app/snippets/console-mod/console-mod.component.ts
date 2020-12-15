import { Component, OnInit } from '@angular/core';
import THOMAS_DORFER from '../../../assets/ts/utils/thomasdorfer';

const ANIMATION_SPEED = 20;
const ANIMATION_SPACES = 4;

@Component({
  selector: 'app-console-mod',
  templateUrl: './console-mod.component.html',
  styleUrls: ['./console-mod.component.scss']
})

export class ConsoleModComponent implements OnInit {

  public consoleText: string = "\n";
  private cons: any;
  private animationStatus = {
    consoleIsInWindow: false,
    hasStarted: false
  }

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initElements();
    this.initEventListener();
  }

  initElements(): void {
    this.cons = document.querySelectorAll(".console-mod")[0];
  }

  initEventListener(): void {
    window.addEventListener('scroll', () => {
      const { top } = this.cons.getBoundingClientRect();

      if(top <= window.innerHeight - window.innerHeight / 6 && !this.animationStatus.hasStarted){
        setTimeout(() => {
          this.cons.classList.add('active');
          this.startAnimation();
          this.animationStatus.consoleIsInWindow = true;
        }, 2000);
      }
    });
  }

  startAnimation(): void {
    if(this.animationStatus.consoleIsInWindow){
      return;
    }
    
    this.animationStatus.hasStarted = true;

    const objectToPrint = JSON.stringify(THOMAS_DORFER, undefined, ANIMATION_SPACES);

    for (let i = 0; i < objectToPrint.length; i++) {
      setTimeout(() => {
        this.consoleText += objectToPrint[i];

        if(i === objectToPrint.length - 1){
          this.cons.classList.remove('active')
        }
      }, ANIMATION_SPEED * i );
    }
  }
}
