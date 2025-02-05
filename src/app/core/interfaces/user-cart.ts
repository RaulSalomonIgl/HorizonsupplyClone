import { CartItem } from './cart-item';

export interface UserCart {
  userId: string;
  items: CartItem[];
}
