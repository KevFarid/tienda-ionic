import { Component } from '@angular/core';
import {Products} from 'src/assets/mocks/Products.js'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  productsList: any = Products;

  searchText = ''

  constructor() {
  }

  search(){
    this.searchText = this.searchText;
  }

}
