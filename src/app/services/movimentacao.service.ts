import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY, map, catchError } from 'rxjs';

import { UtilsService } from './utils.service';

import { Movimentacao } from './../models/Movimentacao.model';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  private apiUrl = environment.apiAdress;

  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) { }

  getAllMovimentacoes(): Observable<Movimentacao[]> {
    return this.http.get<Movimentacao[]>(this.apiUrl + '/movimentacoes').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  create(movimentacao: Movimentacao): Observable<void> {
    return this.http.post<Movimentacao>(this.apiUrl + '/movimentacoes', movimentacao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.utils.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

}
