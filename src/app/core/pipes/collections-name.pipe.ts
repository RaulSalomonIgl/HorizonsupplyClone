import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collectionsName',
  standalone: true,
})
export class CollectionsNamePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    // Extraemos la parte después de "/collections/"
    const pattern = /\/collections\/(.+)/;
    const match = value.match(pattern);

    if (match && match[1]) {
      // Eliminamos guiones y transformamos a formato adecuado
      const formattedString = match[1]
        .replace(/-/g, ' ') // Reemplazamos guiones por espacio
        .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalizamos la primera letra de cada palabra
        .toLowerCase(); // Aseguramos que el resto de las letras sean minúsculas

      return formattedString;
    }

    return value; // Si no se encuentra el patrón, devolvemos el valor original
  }
}
