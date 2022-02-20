/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovimentacaoService } from './movimentacao.service';

describe('Service: Movimentacao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovimentacaoService]
    });
  });

  it('should ...', inject([MovimentacaoService], (service: MovimentacaoService) => {
    expect(service).toBeTruthy();
  }));
});
