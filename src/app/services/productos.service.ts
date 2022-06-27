import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ProductosEmpresa } from '../models/productos.empresas.model'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public url : String = 'https://sucursales-node-in6bv.herokuapp.com/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) { }

  IngresarProducto(modeloProducto: ProductosEmpresa, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloProducto);

    return this._http.post(this.url + '/AgregarproductosEmpresas', parametros, { headers: headersToken })
  }

  obtenerProducto(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.get(this.url + '/ProductosEmpresa',{ headers: headersToken })
  }

  eliminarProductos(idProducto, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(this.url + '/eliminarProductoEmpresa/'+ idProducto,{ headers: headersToken })
  }

  obtenerProductoId(idProducto, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/ProductoId/'+ idProducto, {headers: headersToken})
  }

  editarProductos(modeloProductos: ProductosEmpresa, token): Observable<any> {
    let parametros = JSON.stringify(modeloProductos);
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.put(this.url + '/EditarProductosEmpresas/'+ modeloProductos._id, parametros,{ headers: headersToken})

  }

  obtenerProductoMayorStock(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.get(this.url + '/OrdenarStockMayor',{ headers: headersToken })
  }

  obtenerProductoMenorStock(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.get(this.url + '/OrdenarStockMenor',{ headers: headersToken })
  }


}
