// src/app/services/playback.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaybackService {
  private apiUrl = 'https://n8n.trazo.xyz/webhook/playback';

  constructor(private http: HttpClient) { }

  getPlayback(songId: string): Observable<any> {
    const params = new HttpParams().set('songId', songId);
    return this.http.get<any>(this.apiUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  postPlayback(userId: string, songId: string): Observable<any> {
    const body = { userId, songId };
    return this.http.post<any>(this.apiUrl, body).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}