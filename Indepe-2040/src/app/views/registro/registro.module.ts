import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRegistroComponent } from './forms-registro/forms-registro.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';



@NgModule({
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr'}
  ],
  declarations: [
    FormsRegistroComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class RegistroModule { }
