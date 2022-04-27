import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { Empresas2Component } from './components/empresas2/empresas2.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosSucursalesComponent } from './components/productos-sucursales/productos-sucursales.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'empresas2', component: Empresas2Component },

  { path: 'empresas', component: EmpresasComponent },
  { path: '', component: InicioComponent },

  {
    path: 'usuario', component: InicioUsuarioComponent, children: [
      { path: 'sucursales', component: SucursalesComponent },
      { path: 'productos', component: ProductosComponent }
    ]
  },



  { path: 'productosSucursales', component: ProductosSucursalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

