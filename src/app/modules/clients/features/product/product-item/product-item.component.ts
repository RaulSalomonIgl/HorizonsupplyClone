import { Component, Input, input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ProductQuickviewComponent } from '../product-quickview/product-quickview.component';
import { ProductService } from '@/app/core/services/product.service';
import { Product } from '@/app/core/interfaces/Product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [MatIcon, ProductQuickviewComponent, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;

  _quickview: boolean = false;

  constructor(private _productService: ProductService) {}
  ngOnInit(): void {}
  toggleQuickview() {
    this._quickview = !this._quickview;
  }
}
