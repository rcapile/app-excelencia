import { NavController } from 'ionic-angular';
import { CategoryService } from './../../providers/category-service';
import { Component } from '@angular/core';

/*
  Generated class for the CategoryList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'category-list',
  templateUrl: 'category-list.html',
  providers: [CategoryService]
})
export class CategoryListComponent {

  public categories: any;

  constructor(public NavController:NavController, public CategoryService:CategoryService) {
  }

  ionViewDidLoad() {
    this.CategoryService.list().subscribe(
      data => {
        this.categories = data;
      }
    );
  }

}
