import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './snippets/navbar/navbar.component';
import { NavItemComponent } from './snippets/nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
