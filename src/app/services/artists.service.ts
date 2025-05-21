// src/app/services/artists.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  private apiUrl = 'https://n8n.trazo.xyz/webhook/artistas';
  private artistUrl = 'https://n8n.trazo.xyz/webhook/artists';

  constructor(private http: HttpClient) { }

  getArtists(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getArtistById(id: string): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this.http.get<any>(this.artistUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}