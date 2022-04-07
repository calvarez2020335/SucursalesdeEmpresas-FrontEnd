import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  providers: [UsuarioService]
})
export class RegistrarComponent implements OnInit {
  public usuarioModelPost: Usuario;
  public token;


  constructor(private _usuarioService: UsuarioService) {
    this.usuarioModelPost = new Usuario(
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
      }],
    );

    this.token = this._usuarioService.getToken();
   }


  ngOnInit(): void {
  }


  postRegistarEmpresa(){
    this._usuarioService.RegistrarEmpresa(this.usuarioModelPost, this.token).subscribe(
      (response) => {
        console.log(response);

        this.usuarioModelPost._id = '';
        this.usuarioModelPost.nombre = '';
        this.usuarioModelPost.email = '';
        this.usuarioModelPost.telefono = 0;
        this.usuarioModelPost.direccion = '';
        this.usuarioModelPost.password = '';
        this.usuarioModelPost.rol = '';
        this.usuarioModelPost.tipoEmpresa = '';
        this.usuarioModelPost.ProductoEmpresa = [{
          nombreProducto: '',
        NombreProveedor: '',
        Stock: ''
        }];
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se Registro la Empresa',
          showConfirmButton: false,
          timer: 1500
        })

      },
      (error) => {
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

}
