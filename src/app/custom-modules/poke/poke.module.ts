import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { PokeRoutingModule } from './poke-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import { PopupComponent } from './home/popup/popup.component';
@NgModule({
  declarations: [
    HomeComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    PokeRoutingModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PokeModule { }
