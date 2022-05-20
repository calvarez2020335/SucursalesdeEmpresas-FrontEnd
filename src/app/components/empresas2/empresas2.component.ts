import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment, environment2 } from 'src/environments/environment';
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
  nuevaOpcion:boolean = false;
  tipoEmpresas = environment2.tipoEmpresas;

  constructor(
    public _usuarioService: UsuarioService) {
    this.token = this._usuarioService.getToken()
    this.empresasModelGetId = new Usuario('','','' ,0,'','','','');

  }

  departamentos = environment.departamentos;

  ngOnInit(): void {
    this.getEmpresas();


  }

  getEmpresas(){

      this._usuarioService.VerEmpresas(this.token).subscribe(
        (response)=>{
          this.empresasModelGet = response.Empresas;
        },
        (error)=>{
          console.log(error);
        }
      )

  }


  otraOpcion(){
    if(this.empresasModelGetId.tipoEmpresa == ''){
      this.nuevaOpcion = true;
    }else{
      this.nuevaOpcion = false;
    }

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
