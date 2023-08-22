import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Torre } from '../models/torres';

@Injectable({
  providedIn: 'root',
})
export class TorresService {
  private apiUrl = 'http://localhost:4000/api/torres';

  constructor(private http: HttpClient) {}

  obtenerTorres(): Observable<Torre[]> {
    return this.http.get<Torre[]>(this.apiUrl);
  }

  obtenerTorrePorId(id: string): Observable<Torre> {
    return this.http.get<Torre>(`${this.apiUrl}/${id}`);
  }

  crearTorre(torre: Torre): Observable<Torre> {
    return this.http.post<Torre>(this.apiUrl, torre);
  }

  actualizarTorre(id: string, torre: Torre): Observable<Torre> {
    return this.http.put<Torre>(`${this.apiUrl}/${id}`, torre);
  }

  eliminarTorre(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  marcarMensajeEnviado(id: string): Observable<void> {
    const url = `${this.apiUrl}/marcar-mensaje-enviado/${id}`;
    return this.http.put<void>(url, {});
  }

  
}
