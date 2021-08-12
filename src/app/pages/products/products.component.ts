import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/assets/mocks/User.js'
import { Products } from 'src/assets/mocks/Products.js'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  productList: any = Products
  productInfo: any = {}

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productInfo = this.searchId();
  }

  searchId() {
    let idProduct = this.route.snapshot.params['id'];
    let product = this.productList.filter(x => x['id'] === parseInt(idProduct))

    return product[0];
  }

  addCart(idProduct){
    User['carrito'].push(idProduct)
  }


}
