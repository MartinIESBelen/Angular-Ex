import { Routes } from '@angular/router';
import {ProductListComponent} from '../app/product-list/product-list.component';
import {topBarComponent} from '../app/top-bar/top-bar.component';

export const routes: Routes = [
  {
    path: '', component: ProductListComponent
  },
  {
    path: '', component: topBarComponent
  }
];
