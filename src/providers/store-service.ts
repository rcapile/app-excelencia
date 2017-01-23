import { errorObject } from 'rxjs/util/errorObject';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the StoreService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StoreService {

  constructor(public http: Http) {
    console.log('Hello StoreService Provider');
  }

  list() {
    return this.http.get('http://localhost:3000/stores')
                   .map(result => result.json())
                   .catch((error:any) => Observable.throw(errorObject.json.error));
  }

  get(id) {
    return this.http.get('http://localhost:3000/stores')
                   .map(result => result.json())
                   .catch((error:any) => Observable.throw(errorObject.json.error));
  }
}
