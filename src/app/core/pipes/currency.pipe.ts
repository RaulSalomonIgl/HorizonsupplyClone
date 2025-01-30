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

    // Dividir el valor entre 100 para obtener el valor en la unidad deseada
    let formattedValue = (value / 100).toFixed(decimalPlaces);

    // Usar Intl.NumberFormat para separar miles (si es necesario)
    // formattedValue = new Intl.NumberFormat().format(parseFloat(formattedValue));

    // Devolver el valor con el símbolo de la moneda
    return `${currencySymbol}${formattedValue}`;
  }
}
