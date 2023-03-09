import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './views/login/login.module';
import {MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { RegistroModule } from './views/registro/registro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    LoginModule,
    RegistroModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
