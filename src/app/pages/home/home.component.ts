import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../services/api.service';
import { Produto } from './../../models/Produto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.getProdutos().subscribe({
      next: produtos => this.produtos = produtos,
      error: error => new Error(error)
    });
  }

}
