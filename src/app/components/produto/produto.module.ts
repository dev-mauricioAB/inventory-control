import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogModule } from '../dialog/dialog.module';

import { ProdutoService } from 'src/app/services/produto.service';
import { UtilsService } from './../../services/utils.service';

import { ProdutoComponent } from './produto.component';
import { ProdutoCreateComponent } from './produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './produto-delete/produto-delete.component';

@NgModule({
  declarations: [
    ProdutoComponent,
    ProdutoCreateComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProdutoComponent
      },
      {
        path: 'create',
        component: ProdutoCreateComponent
      },
      {
        path: 'update/:id',
        component: ProdutoUpdateComponent
      },
      {
        path: 'delete/:id',
        component: ProdutoDeleteComponent
      }
    ]),
    MatIconModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTooltipModule,
    DialogModule,
    MatDialogModule
  ],
  providers: [
    UtilsService,
    ProdutoService
  ],
  exports: [ProdutoComponent]
})
export class ProdutoModule { }
