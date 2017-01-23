import { StoreService } from './../../providers/store-service';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

/*
  Generated class for the ListStore component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'list-store',
  templateUrl: 'list-store.html',
  providers:[StoreService]
})
export class ListStoreComponent
{
  public stores;

  constructor(public NavController:NavController, public StoreService:StoreService)  {
  }

  ionViewDidLoad() {
    this.StoreService.list().subscribe(
      data => {
        this.stores = data;
      }
    );
  }
}
