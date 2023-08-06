import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:4000/api/clientes/';

  constructor(private http: HttpClient) { }

  getProductos(searchTerm: string): Observable<Producto[]> {
    // Si el término de búsqueda no está presente o es una cadena vacía, devuelve todos los productos sin filtrar.
    if (!searchTerm || searchTerm.trim() === '') {
      return this.http.get<Producto[]>(this.url);
    }
  
    // Si hay un término de búsqueda, agrega el parámetro 'search' a la URL de la solicitud HTTP.
    // Suponiendo que tu API espera el término de búsqueda como un parámetro 'search' en la URL, puedes hacer algo como esto:
    return this.http.get<Producto[]>(`${this.url}?search=${encodeURIComponent(searchTerm)}`);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.url, producto);
  }

  obtenerProducto(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
