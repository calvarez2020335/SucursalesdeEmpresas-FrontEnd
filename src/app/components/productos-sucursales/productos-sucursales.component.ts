import { Component, OnInit } from '@angular/core';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { Sucursales } from '../../models/sucursales.model'
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProductoSucursalService } from 'src/app/services/productoSucursal.service';
import { ProductosSucursal } from 'src/app/models/productos.sucursales.model';
import Swal from 'sweetalert2'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-sucursales',
  templateUrl: './productos-sucursales.component.html',
  styleUrls: ['./productos-sucursales.component.scss'],
  providers: [SucursalesService, UsuarioService, ProductoSucursalService]
})
export class ProductosSucursalesComponent implements OnInit {

  public productosModelGet: ProductosSucursal;
  public productoModelPost: ProductosSucursal;
  public productosSucursalesModelGetId: ProductosSucursal;
  public token;
  public buscarProducto;
  public elId;
  constructor(

    private _productosService: ProductoSucursalService,
    public _sucursalesService: SucursalesService,
    public _usuarioService: UsuarioService,
    public _activatedRoute: ActivatedRoute) {


    this.productoModelPost = new ProductosSucursal ('','','',0,0);
    this.productosSucursalesModelGetId = new ProductosSucursal ('','','',0,0);
    this.token = this._usuarioService.getToken();

  }

  ngOnInit(): void {


      this._activatedRoute.paramMap.subscribe((dataRuta)=>{
        console.log(dataRuta.get('idSurcursal'));

        this.getProductoSucursal(dataRuta.get('idSurcursal'))
        this.elId = dataRuta.get('idSurcursal')

      })
      console.log(this.elId)

  }



  getProductoSucursal(idSurcursal){
    this._productosService.ObtenerProductoSucursal(idSurcursal, this.token).subscribe(
      (response)=>{

        this.productosModelGet = response.Productos;
        console.log(this.productosModelGet)

      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };

  getProductoStockMayorSucursal(idSurcursal){
    this._productosService.ObtenerProductoStokMayorSucursal(this.elId, this.token).subscribe(
      (response)=>{

        this.productosModelGet = response.Productos;
        console.log(this.productosModelGet)

      },
      (error)=>{
        console.log(<any>error);
      }
    )


  }

  getProductoStockMenorSucursal(idSurcursal){
    this._productosService.ObtenerProductoStokMenorSucursal(this.elId, this.token).subscribe(
      (response)=>{

        this.productosModelGet = response.Productos;
        console.log(this.productosModelGet)

      },
      (error)=>{
        console.log(<any>error);
      }
    )


  }

  getProductoMasVendidoSucursal(idSurcursal){
    this._productosService.ObtenerProductoMasVendidoSucursal(this.elId, this.token).subscribe(
      (response)=>{

        this.productosModelGet = response.Productos;
        console.log(this.productosModelGet)

      },
      (error)=>{
        console.log(<any>error);
      }
    )


  }

  getProductosSucursalesId(idProducto ){
    this._productosService.obtenerProductosSucursalesId(idProducto,this.token).subscribe(
      (response)=>{
        this.productosSucursalesModelGetId = response.Productos;
        console.log(this.productosSucursalesModelGetId)
        this.productosSucursalesModelGetId.StockSurcursal = 0;

      },(error)=>{
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

  putVenta(){
    this._productosService.VentaSimulada(this.productosSucursalesModelGetId, this.token).subscribe(
      (response)=>{
        console.log(response);


        console.log(this.productosSucursalesModelGetId.idSurcursal)
        this.getProductoSucursal(this.productosSucursalesModelGetId.idSurcursal);
        Swal.fire({
          icon: 'success',
          title: 'Producto Vendido',
          showConfirmButton: false,
          timer: 1500
        })
      },
      (error)=>{
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
