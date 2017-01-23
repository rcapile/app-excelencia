import { Component } from '@angular/core';

/*
  Generated class for the ListStore component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'list-store',
  templateUrl: 'list-store.html'
})
export class ListStoreComponent {

  text: string;

  constructor() {
    console.log('Hello ListStore Component');
    this.text = 'Hello World';
  }

}
