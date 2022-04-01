import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleados } from '../models/empleados.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  public url: string = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }

  registrarEmpleado(modeloEmpleados: Empleados) : Observable<any> {
    let parametros = JSON.stringify(modeloEmpleados);

    return this._http.post(this.url + '/registrarEmpleado', parametros, {headers: this.headersVariable});
  }

  obtenerEmpleados() : Observable<any> {
    return this._http.get(this.url + '/Empleados', { headers: this.headersVariable});
  }
}
