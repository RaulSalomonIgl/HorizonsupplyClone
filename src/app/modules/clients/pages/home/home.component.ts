import { Component } from '@angular/core';
import { ProductsComponent } from '../../features/product/products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
