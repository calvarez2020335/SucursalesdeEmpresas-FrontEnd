import { Component, OnInit } from '@angular/core';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { Sucursales} from '../../models/sucursales.model'
import { UsuarioService} from 'src/app/services/usuario.service';


@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  providers: [SucursalesService, UsuarioService]
})
export class SucursalesComponent implements OnInit {

  public sucursalesModelGet: Sucursales;
  public sucursalesModelPost: Sucursales;
  public token;

  constructor(
    private _sucursalesService: SucursalesService,
    public _usuarioService: UsuarioService ) {
    this.sucursalesModelPost = new Sucursales
    (
      '',
      '',
      '',
      '',
      0,
      0,
      ''
    )
    this.token = this._usuarioService.getToken()
   }

  ngOnInit(): void {
    this.getSucursales();
  }

  postSucursales(){
    this._sucursalesService.IngresarSucursales(this.sucursalesModelPost, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getSucursales();

        this.sucursalesModelPost.nombre = '';
        this.sucursalesModelPost.telefono = '';
        this.sucursalesModelPost.direccion = '';
        this.sucursalesModelPost.stock = 0;
        this.sucursalesModelPost.vendido = 0;
        this.sucursalesModelPost.idEmpresa = '';

      },
      (error)=>{
        console.log(error);
      }
    )
  }

  getSucursales(){
    this._sucursalesService.obtenerSucursales(this.token).subscribe(
      (response)=>{
        this.sucursalesModelGet = response.Sucursales;
        console.log(this.sucursalesModelGet)
      },
      (error)=>{
        console.log(error);
      }
    )

    }

  eliminarSucursales(id){
    this._sucursalesService.eliminarSucursales(id,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getSucursales()
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }
  }
