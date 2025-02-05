import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '@/app/core/services/shopping-cart.service';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../../features/ShoppingCart/product/product.component';
import { CartItem } from '@/app/core/interfaces/cart-item';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIcon, ProductComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];
  subtotalPrice: number = 0;
  shipping: number = 40; // Ejemplo de costo de envío
  taxes: number = 0;
  totalPrice: number = 0;
  userId = 'currentUserId'; // Esto debería ser dinámico según el usuario logueado

  constructor(private _shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.cartItems = this._shoppingCartService.getCartItems(this.userId);
    this.calculatePrices();
  }

  removeItem(productId: number): void {
    this._shoppingCartService.removeProduct(this.userId, productId);
    this.cartItems = this._shoppingCartService.getCartItems(this.userId);
    this.calculatePrices();
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this._shoppingCartService.removeProduct(this.userId, productId);
    } else {
      this._shoppingCartService.updateProductQuantity(
        this.userId,
        productId,
        quantity
      );
    }
    this.cartItems = this._shoppingCartService.getCartItems(this.userId);
    this.calculatePrices();
  }

  clearCart(): void {
    this._shoppingCartService.clearCart(this.userId);
    this.cartItems = [];
    this.calculatePrices();
  }

  calculatePrices(): void {
    this.subtotalPrice = this.cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    this.taxes = this.subtotalPrice * 0.15; // Ejemplo de impuestos del 15%
    this.totalPrice = this.subtotalPrice + this.shipping + this.taxes;
  }
}
