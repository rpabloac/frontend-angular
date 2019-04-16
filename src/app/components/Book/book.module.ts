import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { GridBookComponent } from './grid-book.component';
import { FormBookComponent } from './form-book.component';

@NgModule({
  declarations: [
    BookComponent,
    GridBookComponent,
    FormBookComponent
  ],
  exports: [
    BookComponent,
    GridBookComponent,
    FormBookComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: []
})
export class BookModule { }
