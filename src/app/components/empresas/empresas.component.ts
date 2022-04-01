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

  public empleadosModelPost: 

  constructor() { }

  ngOnInit(): void {
  }

}
