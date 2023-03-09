import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [

    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatIconModule
  ]
})
export class LoginModule { }
