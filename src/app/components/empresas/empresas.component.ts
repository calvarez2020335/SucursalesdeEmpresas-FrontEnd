import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleados } from '../../models/empleados.model';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  providers: [EmpleadosService]
})
export class EmpresasComponent implements OnInit {

  public empleadosModelPost: Empleados;

  constructor(private _empleadosService: EmpleadosService) {
    this.empleadosModelPost = new Empleados
    (
      '',
      '',
      '',
      '',
      [{
        idEmpresa: ''
      }]
    );
    
   }

  ngOnInit(): void {

  }

  postEmpleados(){
    this._empleadosService.registrarEmpleado(this.empleadosModelPost).subscribe(
      (response) => {
        console.log(response);
        this.empleadosModelPost.nombre = '';
        this.empleadosModelPost.apellido = '';
        this.empleadosModelPost.puesto = '';
        this.empleadosModelPost.departamento = '';
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

}

