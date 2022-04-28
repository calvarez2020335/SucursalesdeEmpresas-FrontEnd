import { Component, OnInit } from '@angular/core';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { Sucursales } from '../../models/sucursales.model'
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProductoSucursalService } from 'src/app/services/productoSucursal.service';
import { ProductosSucursal } from 'src/app/models/productos.sucursales.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-productos-sucursales',
  templateUrl: './productos-sucursales.component.html',
  styleUrls: ['./productos-sucursales.component.scss'],
  providers: [SucursalesService, UsuarioService, ProductoSucursalService]
})
export class ProductosSucursalesComponent implements OnInit {

  public productosModelGet: ProductosSucursal;
  public sucursalesModelGetId: Sucursales;
  public token;
  constructor(
    private _productosService: ProductoSucursalService,
    public _sucursalesService: SucursalesService,
    public _usuarioService: UsuarioService) {

    this.sucursalesModelGetId = new Sucursales('', '', '', '', 0, '');
    this.token = this._usuarioService.getToken()
  }

  ngOnInit(): void {
    this.getProductoSucursal();

  }

  getProductoSucursal(){
    this._productosService.ObtenerProductoSucursal(this.sucursalesModelGetId._id, this.token).subscribe(
      (response)=>{
        console.log(this.sucursalesModelGetId._id)
        this.productosModelGet = response.ProductosSucursal;
      },
      (error)=>{
        console.log(this.sucursalesModelGetId._id)
        console.log(<any>error);
      }
    )
  };
}
