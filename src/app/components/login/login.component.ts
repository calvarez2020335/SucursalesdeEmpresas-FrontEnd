import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _usuarioService: UsuarioService, private _router: Router) {
    this.usuarioModel = new Usuario(
      "",
      "",
      "",
      0,
      "",
      "",
      "",
      ""
    );
  }

  ngOnInit(): void {
  }

  getTokenPromesa(): Promise<any>{
    return new Promise<any>((resolve, reject) => {
      this._usuarioService.login(this.usuarioModel, "true").subscribe(
        (response)=>{
          localStorage.setItem("token", response.token)
          resolve(response);
        },
        (error)=>{
        }
      )
    })
  }

  getToken(){
    this._usuarioService.login(this.usuarioModel, "true").subscribe(
      (response)=>{
        localStorage.setItem("token", response.token)
      },
      (error)=>{
      }
    )
  }

  login(){
    this._usuarioService.login(this.usuarioModel).subscribe(
      (response)=>{
        this.getTokenPromesa().then(respuesta => {
        localStorage.setItem('identidad', JSON.stringify(response.usuario))
        this._router.navigate([''])
        })
        Swal.fire({
          icon: 'success',
          title: 'Logeado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error)=>{
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    );
  }
}
