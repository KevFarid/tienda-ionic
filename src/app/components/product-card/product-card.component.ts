import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  @Input() productInfo = {
    "id": "id producto",
    "nombre": "producto",
    "precio": "$33.00",
    "by": "fabricante",
    "desc": "descripcion",
    "imgSource": [
      "img1",
      "img2",
      "img3"
    ]
  }
  
  constructor() { }

  ngOnInit() {}

}
