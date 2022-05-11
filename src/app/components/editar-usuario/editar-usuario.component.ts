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
