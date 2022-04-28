import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service'

@Injectable({
  providedIn: 'root'
})
export class NadieValiGuard implements CanActivate {
  public identidad;

  constructor(
    public router: Router,
    public userRest: UsuarioService
    ){}

  canActivate(){
    if (this.userRest.getIdentidad() == null) {
      this.router.navigate(['/login'])
      return false;

    }else{

      return true;
    }
  }

}
