import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuarioModel: Usuario;

  constructor(private _usuarioService: UsuarioService) {
    this.usuarioModel = new Usuario(
      "",
      "",
      "",
      0,
      "",
      "",
      "",
      "",
      [{
        nombreProducto: "",
        NombreProveedor: "",
        Stock: ""
      }]
    );
  }

  ngOnInit(): void {
  }

  getToken(){
    this._usuarioService.login(this.usuarioModel, "true").subscribe(
      (response)=>{
        console.log(response.token);
        localStorage.setItem("token", response.token)
        
      },
      (error)=>{
        console.log(<any>error);
        

      }
    )
  }

  login(){
    this._usuarioService.login(this.usuarioModel).subscribe(
      (response)=>{
        console.log(response.usuario);
        localStorage.setItem('identidad', JSON.stringify(response.usuario))
        this.getToken();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Logeado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
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
    );
  }
}
