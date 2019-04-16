import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: []
})
export class SharedModule { }
