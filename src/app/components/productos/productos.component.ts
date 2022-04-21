import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductosEmpresa} from '../../models/productos.empresas.model';
import { UsuarioService} from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [ProductosService, UsuarioService]
})
export class ProductosComponent implements OnInit {

  public productosModelGet: ProductosEmpresa;
  public productosModelPost: ProductosEmpresa;
  public productosModelGetId: ProductosEmpresa;
  public token;

  constructor(
    private _productosService: ProductosService,
    public _usuarioService: UsuarioService) {
    this.productosModelPost = new ProductosEmpresa
    (
      '',
      '',
      '',
      '',
      0
    );
    this.productosModelGetId = new ProductosEmpresa('','','','',0);
    this.token = this._usuarioService.getToken()
   }

  ngOnInit(): void {
    this.getProductos();
  }

  postProductos(){
    this._productosService.IngresarProducto(this.productosModelPost, this.token).subscribe(
      (response)=> {
        console.log(response);
        this.getProductos();

        this.productosModelPost.idEmpresa = '';
        this.productosModelPost.NombreProducto = '';
        this.productosModelPost.NombreProveedor = '';
        this.productosModelPost.Stock = 0;

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Sucursal Agregado Correctamente',
          showConfirmButton: false,
          timer: 1500
        })

      },
      (error)=>{
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

  getProductos(){
    this._productosService.obtenerProducto(this.token).subscribe(
      (response)=>{
        this.productosModelGet = response.Productos;
        console.log(this.productosModelGet)
      },
      (error)=>{
        console.log(error);
      }

    )
  }

  getProductosId(idProducto){
    this._productosService.obtenerProductoId(idProducto,this.token).subscribe(
      (response)=>{
        this.productosModelGetId = response.Producto;
        console.log(this.productosModelGetId);
      },
      (error)=> {
        console.log(error);
      }
    )
  }

  putProductos(){
    this._productosService.editarProductos(this.productosModelGetId, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos()
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  eliminarProductos(id){
    this._productosService.eliminarProductos(id, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos()
      },
      (error)=>{
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
