import { Component } from '@angular/core';
import {products} from '../models/products';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'app/products/list.html',
  styleUrls: ['app/products/list.css']
})

export class ProductListComponent {
  products = [...products];

  share(){
    window.alert()
  }
}

