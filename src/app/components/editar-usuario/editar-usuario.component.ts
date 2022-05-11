import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/services/usuario.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  public token;
  user;

  constructor(
    private userRest: UsuarioService,) {
      this.token = this.userRest.getToken()
    }

  ngOnInit(): void {
    this.user = this.userRest.getIdentidad();
    console.log(this.user);
  }

  updateUser(){
    this.userRest.updateUser(this.user._id, this.user, this.token).subscribe({
      next: (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'usuario Actualizado',
          showConfirmButton: false,
          timer: 1500

        })
      },
      error: (err)=> {
        console.log(<any>err);
        Swal.fire({
          icon: 'error',
          title: err.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }

      })

  }

}
