import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { Empresas2Component } from './components/empresas2/empresas2.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosSucursalesComponent } from './components/productos-sucursales/productos-sucursales.component';
import { InicioUsuarioComponent } from './components/inicio-usuario/inicio-usuario.component';
import { InicioAdminComponent } from './components/inicio-admin/inicio-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmpresasComponent,
    LoginComponent,
    RegistrarComponent,
    InicioComponent,
    SucursalesComponent,
    Empresas2Component,
    ProductosComponent,
    ProductosSucursalesComponent,
    InicioUsuarioComponent,
    InicioAdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
