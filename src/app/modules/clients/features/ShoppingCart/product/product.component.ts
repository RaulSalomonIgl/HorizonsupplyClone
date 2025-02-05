import { Product } from '@/app/core/interfaces/Product';
import { ProductService } from '@/app/core/services/product.service';
import { ShoppingCartService } from '@/app/core/services/shopping-cart.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatIcon, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Input() quantity!: number;
  @Output() remove = new EventEmitter<void>();
  @Output() increase = new EventEmitter<void>();
  @Output() decrease = new EventEmitter<void>();

  // product!: Product;

  constructor() {}

  ngOnInit(): void {}

  onRemove(): void {
    this.remove.emit();
  }

  onIncrease(): void {
    this.increase.emit();
  }

  onDecrease(): void {
    this.decrease.emit();
  }
}
