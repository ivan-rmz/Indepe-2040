import { NgModule } from '@angular/core';
import { LoginComponent } from './views/login/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { FormsRegistroComponent } from './views/registro/forms-registro/forms-registro.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registro', component: FormsRegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
