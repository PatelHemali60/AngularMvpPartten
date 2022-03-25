import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    PagenotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SideBarComponent
  ]
})
export class CoreModule { }

