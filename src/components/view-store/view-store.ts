import { CategoryListComponent } from './../category-list/category-list';
import { StoreService } from '../../providers/store-service';
import { NavController, NavParams, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { Component } from '@angular/core';

/*
  Generated class for the ViewStore component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'view-store',
  templateUrl: 'view-store.html',
  providers: [StoreService]
})
export class ViewStoreComponent {

  public store;
  public storeId;

  constructor(
    public NavController:NavController,
    public NavParams:NavParams,
    public LoadingController:LoadingController,
    public AlertController:AlertController,
    public ModalController:ModalController,
    public StoreService:StoreService) {

     this.storeId = this.NavParams.get('store');
  }

  ionViewDidLoad() {
    let loader = this.LoadingController.create({
       content:'Carregando StoreService...'
     })
     loader.present();
    this.StoreService.get(this.storeId).subscribe(
      data => {
        this.store = data;
        loader.dismiss();
      }
    )
  }

  confirmStart() {
    let confirm = this.AlertController.create({
      title: 'Nova avaliação.',
      message: 'Você quer comçar uma nova avaliação?',
      buttons: [
        {
          text: 'Não'
        },
         {
          text: 'Sim',
          handler: () => {
            console.log('sim clicked');
            let modal = this.ModalController.create(CategoryListComponent);
            modal.present();
          }
        }
      ]
    });
    confirm.present();
  }

}

