import { Product } from '@/app/core/interfaces/Product';
import { ProductSizePipe } from '@/app/core/pipes/product-size.pipe';
import { CurrencyPipe } from '@/app/core/pipes/currency.pipe';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-product-quickview',
  standalone: true,
  imports: [ProductSizePipe, MatIcon, CurrencyPipe],
  templateUrl: './product-quickview.component.html',
  styleUrl: './product-quickview.component.css',
})
export class ProductQuickviewComponent implements OnChanges {
  @Input() product!: Product;
  @Output() closeQuickview = new EventEmitter<void>();

  productCover!: string;

  ngOnChanges(changes: SimpleChanges): void {
    this.productCover = this.product.images[0];
  }

  toggleQuickview() {
    this.closeQuickview.emit();
  }

  setCover(p_src: string) {
    this.productCover = p_src;
  }
}
