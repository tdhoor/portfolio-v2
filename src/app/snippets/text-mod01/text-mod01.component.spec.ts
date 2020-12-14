import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMod01Component } from './text-mod01.component';

describe('TextMod01Component', () => {
  let component: TextMod01Component;
  let fixture: ComponentFixture<TextMod01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextMod01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMod01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
