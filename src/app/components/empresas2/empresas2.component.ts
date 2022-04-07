import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-empresas2',
  templateUrl: './empresas2.component.html',
  styleUrls: ['./empresas2.component.scss'],
  providers: [UsuarioService]
})
export class Empresas2Component implements OnInit {
  public empresasModelGet: Usuario;
  public token;

  constructor(public _usuarioService: UsuarioService) {
    this.token = this._usuarioService.getToken()
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
}
