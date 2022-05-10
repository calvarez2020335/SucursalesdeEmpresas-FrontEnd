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
      ""
    );

    this.token = this._usuarioService.getToken();
   }

   departamentos = [
     {codigo:"Guatemala", nombre:"Guatemala"},
     {codigo:"Mixco", nombre:"Mixco"},
     {codigo:"Villa Nueva", nombre:"Villa Nueva"},
     {codigo:"San Juan Sacatepéquez", nombre:"San Juan Sacatepéquez"},
     {codigo:"Villa Canales", nombre:"Villa Canales"},
     {codigo:"Amatitlán", nombre:"Amatitlán"},
     {codigo:"San Miguel Petapa", nombre:"San Miguel Petapa"},
     {codigo:"Chinautla", nombre:"Chinautla"},
     {codigo:"San José Pinula", nombre:"San José Pinula"},
     {codigo:"Santa Catarina Pinula", nombre:"Santa Catarina Pinula"},
     {codigo:"Palencia", nombre:"Palencia"},
     {codigo:"San Pedro Ayampuc", nombre:"San Pedro Ayampuc"},
     {codigo:"Fraijanes", nombre:"Fraijanes"},
     {codigo:"San Pedro Sacatepéquez", nombre:"San Pedro Sacatepéquez"},
     {codigo:"San Raymundo", nombre:"San Raymundo"},
     {codigo:"Chuarrancho", nombre:"Chuarrancho"},
     {codigo:"San José del Golfo", nombre:"San José del Golfo"},
   ]

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
        this.usuarioModelPost.tipoEmpresa = ''
        Swal.fire({
          icon: 'success',
          title: 'Se Registro la Empresa',
          showConfirmButton: false,
          timer: 1500
        })

      },
      (error) => {
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
