import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { Empresas2Component } from './components/empresas2/empresas2.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';


const routes: Routes = [
  { path: 'empresas', component: EmpresasComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: '', component: LoginComponent},
  {path: 'registrar' , component: RegistrarComponent },
  { path: 'empresas2', component: Empresas2Component},
  {path: 'productos', component: ProductosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

