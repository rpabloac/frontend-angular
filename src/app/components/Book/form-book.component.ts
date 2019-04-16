import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-form-book-componenet',
  template: `

  `,
  providers:[
    BookService
  ]
})
export class FormBookComponent {
  constructor() { }
}
