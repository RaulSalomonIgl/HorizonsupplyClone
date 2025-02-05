import { Medum } from '@/app/core/interfaces/Medum';
import { Product } from '@/app/core/interfaces/Product';
import { CurrencyPipe } from '@/app/core/pipes/currency.pipe';
import { ProductSizePipe } from '@/app/core/pipes/product-size.pipe';
import { ProductService } from '@/app/core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { AccordionCollapseComponent } from '../../../../shared/ui/accordion-collapse/accordion-collapse.component';
import { ReviewComponent } from '../../../../shared/ui/review/review.component';
import { RatingComponent } from '../../../../shared/ui/rating/rating.component';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from '@/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    ProductSizePipe,
    MatIcon,
    AccordionCollapseComponent,
    ReviewComponent,
    RatingComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  product?: Product;
  userId = 'currentUserId'; // Esto debería ser dinámico según el usuario logueado
  productCover?: Medum;
  currentIndex: number = 0;
  isHovered: boolean = false;
  quantity: number = 1;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    // Obtener el valor de la URL
    const id = this._route.snapshot.paramMap.get('');
    this._productService.getProduct(Number(id)).subscribe((data) => {
      this.product = data;
      this.productCover = data.media[0];
    });
  }

  setCover(p_media: Medum) {
    this.productCover = p_media;
  }

  // Muestra la imagen anterior, asegurando que no se salga del rango
  showPrevious() {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
  }

  // Muestra la imagen siguiente, asegurando que no se salga del rango
  showNext() {
    this.currentIndex = Math.min(
      this.currentIndex + 1,
      this.product?.media.length ?? -4
    );
  }

  decrement() {
    if (this.quantity > 1) this.quantity -= 1;
  }

  increment() {
    this.quantity += 1;
  }

  addToCart(p_product: Product): void {
    this._shoppingCartService.addProduct(this.userId, p_product, this.quantity);
  }
}
