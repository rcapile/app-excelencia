import { errorObject } from 'rxjs/util/errorObject';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the CategoryService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CategoryService {

  constructor(public http: Http) {
    console.log('Hello CategoryService Provider');
  }

  list() {
    return this.http.get('http://localhost:3000/categories')
                   .map(result => result.json())
                   .catch((error:any) => Observable.throw(errorObject.json.error));
  }

  get(id) {
    return this.http.get('http://localhost:3000/categories'+id)
                   .map(result => result.json())
                   .catch((error:any) => Observable.throw(errorObject.json.error));
  }
}
