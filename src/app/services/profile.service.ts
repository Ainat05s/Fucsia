// src/app/services/profile.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://n8n.trazo.xyz/webhook/profile';

  constructor(private http: HttpClient) { }

  getProfile(userId: string): Observable<any> {
    const params = new HttpParams().set('userId', userId);
    return this.http.get<any>(this.apiUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}