import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-product',
  templateUrl: './slide-product.component.html',
  styleUrls: ['./slide-product.component.scss'],
})
export class SlideProductComponent implements OnInit {

  constructor() { }
  @Input() imgs = [""]

  ngOnInit() {}

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

}
