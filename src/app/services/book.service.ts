import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceBase } from './.service';
import { BookModel } from '../models/book.model';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookService extends ServiceBase {
  constructor(public http: HttpClient) {
    super(http);
    this.httpBaseURL = environment.APIUrl + '/v1/Book';
  }

  getBooks(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.httpBaseURL + '/getBooks');
  }

  getBook(id: number): Observable<BookModel> {
    return null;
  }

  store(book: BookModel): Observable<BookModel> {
    return null;
  }

  update(book: BookModel) {
    return null;
  }

  delete(book: BookModel) {
    return null;
  }
}
