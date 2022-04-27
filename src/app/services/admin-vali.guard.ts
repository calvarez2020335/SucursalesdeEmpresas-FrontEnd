import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service'

@Injectable({
  providedIn: 'root'
})
export class AdminValiGuard implements CanActivate {
  public identidad;

  constructor(
    public router: Router,
    public userRest: UsuarioService
    ){}

  canActivate(){
    if (this.userRest.getIdentidad().rol === 'ROL_ADMIN') {

      return true;
      
    }else{
      this.router.navigate(['/login'])
      
      return false;
    }
  }
  
}
