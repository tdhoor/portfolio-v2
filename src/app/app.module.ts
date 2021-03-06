import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './snippets/navbar/navbar.component';
import { NavItemComponent } from './snippets/nav-item/nav-item.component';
import { TextMod01Component } from './snippets/text-mod01/text-mod01.component';
import { ConsoleModComponent } from './snippets/console-mod/console-mod.component';
import { SliderOneComponent } from './snippets/slider-one/slider-one.component';
import { SliderTwoComponent } from './snippets/slider-two/slider-two.component';
import { TextMod02Component } from './snippets/text-mod02/text-mod02.component';
import { FooterComponent } from './snippets/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavItemComponent,
    TextMod01Component, 
    ConsoleModComponent,
    SliderOneComponent,
    SliderTwoComponent,
    TextMod02Component,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
