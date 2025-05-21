// src/app/services/albums.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://n8n.trazo.xyz/webhook/albums';
  private albumUrl = 'https://n8n.trazo.xyz/webhook/albums/id';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getAlbumById(id: string): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this.http.get<any>(this.albumUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}