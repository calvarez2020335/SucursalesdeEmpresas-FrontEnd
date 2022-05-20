import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {ProductosSucursal} from '../models/productos.sucursales.model'

@Injectable({
  providedIn: 'root'
})
export class ProductoSucursalService {
  public url : String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) { }

  EnviarProducto(idSurcursal, modeloProducto: ProductosSucursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )
    let parametros = JSON.stringify(modeloProducto);
    return this._http.put(this.url+'/EnviarProductosSurcursales/'+ idSurcursal, parametros, { headers: headersToken })
  }

  ObtenerProductoSucursal(idSurcursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )
    return this._http.get(this.url+'/VerProductosPorSucursales/'+ idSurcursal, { headers: headersToken})
  }

  obtenerProductosSucursalesId(idProducto, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );
    return this._http.get(this.url + '/ProductosSurcursalesId/'+idProducto, { headers: headersToken})
  }

  VentaSimulada( modeloProductoSucursales: ProductosSucursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloProductoSucursales);


    return this._http.put(this.url + '/VentaSimuladaSurcursal/' + modeloProductoSucursales.idSurcursal, parametros, { headers: headersToken })
  }

  ObtenerProductoStokMayorSucursal(idSurcursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )
    return this._http.get(this.url+'/stockMasAlto/'+ idSurcursal, { headers: headersToken})
  }

}
