import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMod02Component } from './text-mod02.component';

describe('TextMod02Component', () => {
  let component: TextMod02Component;
  let fixture: ComponentFixture<TextMod02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextMod02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMod02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
