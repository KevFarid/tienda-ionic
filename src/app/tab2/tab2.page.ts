import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Products } from 'src/assets/mocks/Products.js'
import { User } from 'src/assets/mocks/User.js'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnChanges {
  
  cardList:any= []

  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ok');
    
  }
  
  ngOnInit() {
    this.cardListFound();
  }

  cardListFound() {
    let idListCard = User['carrito'];
    this.cardList = Products.filter( x => idListCard.includes(x['id']))
    console.log(this.cardList);
  }

  deleteCart(idProduct) {
    User['carrito'] = User['carrito'].filter(x => x !== idProduct);
    this.cardList = this.cardList.filter(x => x['id'] !== idProduct);
  }

}
