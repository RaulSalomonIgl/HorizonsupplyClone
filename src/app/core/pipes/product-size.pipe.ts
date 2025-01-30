import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSize',
  standalone: true,
})
export class ProductSizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    return value.split('-')[1];
  }
}
