import { Injectable } from '@angular/core';
import { UserCart } from '../interfaces/user-cart';
import { Product } from '../interfaces/Product';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private userCarts: UserCart[] = [];
  private readonly storageKey = 'userCarts';

  constructor() {
    this.loadCartsFromStorage();
  }

  private loadCartsFromStorage(): void {
    const storedCarts = localStorage.getItem(this.storageKey);
    if (storedCarts) {
      this.userCarts = JSON.parse(storedCarts);
    }
  }

  private saveCartsToStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.userCarts));
  }

  getCart(userId: string): UserCart | undefined {
    return this.userCarts.find((cart) => cart.userId === userId);
  }

  addProduct(userId: string, product: Product, quantity: number = 1): void {
    let cart = this.getCart(userId);
    if (!cart) {
      cart = { userId, items: [] };
      this.userCarts.push(cart);
    }
    const existingItem = cart.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product, quantity });
    }
    this.saveCartsToStorage();
  }

  removeProduct(userId: string, productId: number): void {
    const cart = this.getCart(userId);
    if (cart) {
      cart.items = cart.items.filter((item) => item.product.id !== productId);
      this.saveCartsToStorage();
    }
  }

  updateProductQuantity(
    userId: string,
    productId: number,
    quantity: number
  ): void {
    const cart = this.getCart(userId);
    if (cart) {
      const item = cart.items.find((item) => item.product.id === productId);
      if (item) {
        item.quantity = quantity;
        this.saveCartsToStorage();
      }
    }
  }

  clearCart(userId: string): void {
    const cart = this.getCart(userId);
    if (cart) {
      cart.items = [];
      this.saveCartsToStorage();
    }
  }

  getCartItems(userId: string): CartItem[] {
    const cart = this.getCart(userId);
    return cart ? cart.items : [];
  }
}
