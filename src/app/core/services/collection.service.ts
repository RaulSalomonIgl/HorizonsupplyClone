import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private apiUrl = 'assets/data/collections.json'; // Ruta a tu archivo JSON en assets

  constructor(private _http: HttpClient) {}

  // Método para obtener los datos del archivo JSON
  getData(): Observable<any> {
    return this._http.get<any>(this.apiUrl);
  }
}
