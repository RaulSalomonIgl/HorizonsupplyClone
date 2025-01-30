import { Routes } from '@angular/router';
import { ClientLayoutComponent } from '../../shared/layouts/client-layout/client-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductComponent } from './pages/product/product.component';

export const CLIENT_ROUTES: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: 'products/:', component: ProductComponent },
    ],
  },
];
