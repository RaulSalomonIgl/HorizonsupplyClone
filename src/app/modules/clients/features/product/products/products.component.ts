import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '@/app/core/services/product.service';
import { Product } from '@/app/core/interfaces/Product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  data!: Product[];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getData().subscribe(
      (response) => {
        this.data = response.sort((first: Product, second: Product) => {
          const textA = first.published_at.toLowerCase();
          const textB = second.published_at.toLowerCase();
          return textA > textB ? -1 : textA < textB ? 1 : 0;
        });
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}
