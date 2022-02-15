import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Produto } from './../models/Produto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiAdress;

  constructor(
    private http: HttpClient
  ) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl + 'produtos');
  }

  getProduto(produtoCodigo: number): Observable<Produto> {
    return this.http.get<Produto>(this.apiUrl + `produtos/${produtoCodigo}`);
  }

  editProduct(produto: Produto): Observable<Produto> {
    return this.http.patch<Produto>(this.apiUrl + `produtos/${produto.codigo}`, produto);
  }

  addProduct(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl + `produtos/${produto.codigo}`, produto);
  }

  deleteProduto(produtoCodigo: number): Observable<Produto> {
    return this.http.delete<Produto>(this.apiUrl + `produtos/${produtoCodigo}`);
  }
}
