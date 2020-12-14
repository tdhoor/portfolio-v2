import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleModComponent } from './console-mod.component';

describe('ConsoleModComponent', () => {
  let component: ConsoleModComponent;
  let fixture: ComponentFixture<ConsoleModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
