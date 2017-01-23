import { Http } from '@angular/http';
import { ServiceAbstract } from './service-abstract';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the StoreService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class StoreService extends ServiceAbstract
{

  constructor(public http: Http)
  {
    super(http);
  }

  list() {
    console.log('acessando ' + this.apiUrl + '/stores');

    return this.http.get(this.apiUrl + '/stores')
                    .map(result => result.json())
                    .catch(this.handleError);
  }

  get(id) {
    return this.http.get(this.apiUrl + '/stores/'+id)
                   .map(result => result.json())
                   .catch(this.handleError);
  }
}