import { Component } from '@angular/core';

/*
  Generated class for the ViewStore component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'view-store',
  templateUrl: 'view-store.html'
})
export class ViewStoreComponent {

  text: string;

  constructor() {
    console.log('Hello ViewStore Component');
    this.text = 'Hello World';
  }

}
