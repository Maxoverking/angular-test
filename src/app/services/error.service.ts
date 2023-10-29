import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }
  error$ = new Subject<string>();

  handle(message: string) {
    this.error$.next(message)
  }

  clear() {
    this.error$.next('');
  }
}
