import { Component, OnInit } from '@angular/core';
import { Sucursales } from 'src/app/models/sucursales.model';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-productos-sucursales',
  templateUrl: './productos-sucursales.component.html',
  styleUrls: ['./productos-sucursales.component.scss']
})
export class ProductosSucursalesComponent implements OnInit {


  public token;

  constructor(public _sucursalesService: SucursalesService,
    public _usuarioService: UsuarioService) { 


    this.token = this._usuarioService.getToken()
  }

  ngOnInit(): void {
  }

}
