import { Component, OnInit } from '@angular/core';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { Sucursales} from '../../models/sucursales.model'
import { UsuarioService} from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  providers: [SucursalesService, UsuarioService]
})
export class SucursalesComponent implements OnInit {

  public sucursalesModelGet: Sucursales;
  public sucursalesModelPost: Sucursales;
  public sucursalesModelGetId: Sucursales;
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
      ''
    );
    this.sucursalesModelGetId = new Sucursales('','','','',0,'');
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
        this.sucursalesModelPost.vendido = 0;
        this.sucursalesModelPost.idEmpresa = '';
        Swal.fire({
          icon: 'success',
          title: 'Sucursal Agregado Correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error)=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
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

    getSucursalesId(idSucursal){
      this._sucursalesService.obtenerSucursalesId(idSucursal,this.token).subscribe(
        (response)=>{
          this.sucursalesModelGetId = response.Sucursal;
          console.log(this.sucursalesModelGetId)
        },(error)=>{
          console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
        }
      )
    }

    putSucursales(){
      this._sucursalesService.editarSucursales(this.sucursalesModelGetId, this.token).subscribe(
        (response)=>{
          console.log(response);
          this.getSucursales()
        },(error)=>{
          console.log(<any>error);
          Swal.fire({
            icon: 'error',
            title: error.error.mensaje,
            showConfirmButton: false,
            timer: 1500
          })
        }
      )
    }

  eliminarSucursales(id){
    this._sucursalesService.eliminarSucursales(id,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getSucursales()
        Swal.fire({

          icon: 'error',
          title: 'eliminado exitosamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error)=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }
  }
