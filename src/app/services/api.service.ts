import { UtilsService } from './utils.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, EMPTY } from 'rxjs';

import { Produto } from './../models/Produto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiAdress;

  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) { }


  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl + '/produtos', produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl + '/produtos').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getProduto(id: string): Observable<Produto> {
    const url = `${this.apiUrl}/produtos/${id}`;

    return this.http.get<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.apiUrl}/produtos/${produto.id}`;

    return this.http.put<Produto>(url, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Produto> {
    const url = `${this.apiUrl}/produtos/${id}`;

    return this.http.delete<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.utils.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
