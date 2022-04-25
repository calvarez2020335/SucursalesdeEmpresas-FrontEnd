import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresas2',
  templateUrl: './empresas2.component.html',
  styleUrls: ['./empresas2.component.scss'],
  providers: [UsuarioService]
})
export class Empresas2Component implements OnInit {
  public empresasModelGet: Usuario;
  public empresasModelGetId: Usuario;
  public token;

  constructor(
    public _usuarioService: UsuarioService) {
    this.token = this._usuarioService.getToken()
    this.empresasModelGetId = new Usuario('','','' ,0,'','','','');
  }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(){

      this._usuarioService.VerEmpresas(this.token).subscribe(
        (response)=>{
          this.empresasModelGet = response.Empresas;
          console.log(this.empresasModelGet)
        },
        (error)=>{
          console.log(error);
        }
      )

  }

  eliminarEmpresas(id){
    this._usuarioService.EliminarEmpresas(id,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresas();
      },
      (error)=>{
        console.log(<any>error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  getEmpresasId(idEmpresa){
    this._usuarioService.obtenerEmpresaId(idEmpresa,this.token).subscribe(
      (response)=>{
        this.empresasModelGetId = response.Empresa;
        console.log(this.empresasModelGetId);
      },
      (error)=> {
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

  putEmpresa(){
    this._usuarioService.editarEmpresa(this.empresasModelGetId, this.token).subscribe(
      (response)=> {
        console.log(response);
        this.getEmpresas()
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
