// src/app/services/search.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'https://n8n.trazo.xyz/webhook/search';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<any> {
    const params = new HttpParams().set('q', query);
    return this.http.get<any>(this.apiUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}