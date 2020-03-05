import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Solicitation } from '../models/solicitation';

@Injectable({
  providedIn: 'root'
})
export class SolicitationService {

  url = 'http://localhost:8080/solicitations'

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  }

  getSolicitations(): Observable<Solicitation[]> {
    return this.httpClient.get<Solicitation[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveSolicitation(solicitation: Solicitation): Observable<Solicitation> {
    return this.httpClient.post<Solicitation>(this.url, JSON.stringify(solicitation), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, mensagem: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
