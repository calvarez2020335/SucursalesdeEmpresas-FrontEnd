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
import { ValidacionGuard } from './services/validacion.guard';
import { AdminValiGuard } from './services/admin-vali.guard';
import { NadieValiGuard } from './services/nadie-vali.guard';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';


const routes: Routes = [

  {path: '', component: InicioComponent},
  { path: 'empresas', component: EmpresasComponent},
  {path: 'login', component: LoginComponent},
  { path: 'registrar', component: RegistrarComponent },
  {path: 'editarUsuario', component: EditarUsuarioComponent},
  { path: 'admin', component: InicioAdminComponent, canActivate: [NadieValiGuard, AdminValiGuard], children: [
    { path: 'empresas2', component: Empresas2Component},
    { path: 'sucursales/:idEmpresa', component: SucursalesComponent }
  ]},




  {path: 'usuario', component: InicioUsuarioComponent, canActivate: [NadieValiGuard, ValidacionGuard ], children: [
      { path: 'sucursales', component: SucursalesComponent },
      { path: 'productos', component: ProductosComponent },
      {path: 'editarUsuario', component: EditarUsuarioComponent},
      { path: 'productosSucursales/:idSurcursal', component: ProductosSucursalesComponent },
      { path: 'graficas/:idSurcursal', component: GraficasComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

