import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { NavigationComponent } from './navigation.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    RouterModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
