import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'assets/data/products.json'; // Ruta a tu archivo JSON en assets

  constructor(private _http: HttpClient) {}

  private getProducts(): Observable<any[]> {
    return this._http.get<any[]>(this.apiUrl).pipe(
      map((products) =>
        products.map((product) => ({
          ...product,
          price: product.price / 100,
        }))
      )
    );
  }

  // Método para obtener los datos del archivo JSON
  getData(): Observable<any[]> {
    return this.getProducts();
  }

  // Método para obtener los datos de un producto
  getProduct(p_id: number): Observable<Product> {
    return this.getProducts().pipe(
      map((data: any) => data.find((item: Product) => item.id === p_id))
    );
  }
}
