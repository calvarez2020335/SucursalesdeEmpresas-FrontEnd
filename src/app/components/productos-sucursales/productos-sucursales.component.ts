import { Component, OnInit } from '@angular/core';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { Sucursales } from '../../models/sucursales.model'
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProductoSucursalService } from 'src/app/services/productoSucursal.service';
import { ProductosSucursal } from 'src/app/models/productos.sucursales.model';
/* import {SucursalesComponent} from '../../components/sucursales/sucursales.component'; */
import Swal from 'sweetalert2'

@Component({
  selector: 'app-productos-sucursales',
  templateUrl: './productos-sucursales.component.html',
  styleUrls: ['./productos-sucursales.component.scss'],
  providers: [SucursalesService, UsuarioService, ProductoSucursalService]
})
export class ProductosSucursalesComponent implements OnInit {

  public productosModelGet: ProductosSucursal;
  public idSurcursal;
  public token;
  constructor(
    /* public SucursalesType: SucursalesComponent, */
    private _productosService: ProductoSucursalService,
    public _sucursalesService: SucursalesService,
    public _usuarioService: UsuarioService) {

    this.idSurcursal = this._sucursalesService.getSucursalesIdTT(),
    this.token = this._usuarioService.getToken()
  }

  ngOnInit(): void {
    this.getProductoSucursal()


  }


  getProductoSucursal(){
    this._productosService.ObtenerProductoSucursal(this.idSurcursal, this.token).subscribe(
      (response)=>{
        
        this.productosModelGet = response.Productos;
        console.log(this.productosModelGet)

      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };
}
