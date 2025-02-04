import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
  standalone: true,
})
export class CurrencyPipe implements PipeTransform {
  transform(
    value?: number,
    currencySymbol: string = '€',
    decimalPlaces: number = 2
  ): string {
    if (value == null) return '';

    let formattedValue = value.toFixed(decimalPlaces);

    // Devolver el valor con el símbolo de la moneda
    return `${currencySymbol}${formattedValue}`;
  }
}
