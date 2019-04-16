import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredencialModel } from '../models/credencial.model';

@Injectable()
export class UserDataProvider {
  setCredencial(credencial: CredencialModel) {
    localStorage.setItem('credencial', JSON.stringify(credencial));
  }

  getCredencial(): Observable<CredencialModel> {
    return new Observable((observer) => {
      const credencial = JSON.parse(localStorage.getItem('credencial'));
      observer.next(credencial);
      observer.complete();
    });
  }
}
