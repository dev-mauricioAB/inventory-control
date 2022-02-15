import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ApiService } from 'src/app/services/api.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      },
    ])
  ],
  providers: [
    ApiService
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
