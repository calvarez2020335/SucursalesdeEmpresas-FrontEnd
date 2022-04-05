import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';


const routes: Routes = [
  { path: 'empresas', component: EmpresasComponent},
  {path: '', component: InicioComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrar' , component: RegistrarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

