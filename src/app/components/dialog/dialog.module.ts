import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }
