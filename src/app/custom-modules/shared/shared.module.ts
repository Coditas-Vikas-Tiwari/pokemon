import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CustomStyleDirective } from './custom-style.directive';

@NgModule({
  declarations: [ ButtonComponent,
    InputComponent,
    CustomStyleDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [
    ButtonComponent,
    InputComponent
  ]
})
export class SharedModule { }
