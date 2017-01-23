import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceAbstract provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceAbstract {

  protected apiUrl = 'http://localhost:3000';

  constructor(public http: Http) {
    console.log('Hello ServiceAbstract Provider');
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error')
  }
}
