import { Http } from '@angular/http';
import { ServiceAbstract } from './service-abstract';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the CategoryService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CategoryService extends ServiceAbstract {

  constructor(public http: Http) {
    super(http);
  }
  
  list() {
    return this.http.get(this.apiUrl + '/categories')
                   .map(result => result.json())
                   .catch(this.handleError);
  }

  get(id) {
    return this.http.get(this.apiUrl + '/categories/'+id)
                   .map(result => result.json())
                   .catch(this.handleError);
  }
}
