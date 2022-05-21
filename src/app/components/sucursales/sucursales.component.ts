import { Component, OnInit } from '@angular/core';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { Sucursales } from '../../models/sucursales.model'
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProductoSucursalService } from 'src/app/services/productoSucursal.service';
import { Usuario } from 'src/app/models/usuario.model';
import { ProductosSucursal } from 'src/app/models/productos.sucursales.model';
import { ProductosEmpresa} from '../../models/productos.empresas.model';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2'
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  providers: [SucursalesService, UsuarioService, ProductoSucursalService, ProductosService]
})
export class SucursalesComponent implements OnInit {

  public productosModelGet: ProductosEmpresa;
  public sucursalesModelGet: Sucursales;
  public sucursalesAdminModelGet: Sucursales;
  public sucursalesModelPost: Sucursales;
  public sucursalesModelGetId: Sucursales;
  public empresasModelGet: Usuario;
  public empresasModelGetId: Usuario;
  public productoModelPost: ProductosSucursal;

  public token;
  load: boolean = false;

  constructor(
    public _productosServiceEmpresa: ProductosService,
    public _activatedRoute: ActivatedRoute,
    private _sucursalesService: SucursalesService,
    public _productosService: ProductoSucursalService,
    public _usuarioService: UsuarioService ) {
    this.sucursalesModelPost = new Sucursales
      (
        '',
        '',
        '',
        '',
        0,
        ''
      );
    this.productoModelPost = new ProductosSucursal('', '', '', 0, 0);
    this.sucursalesModelGetId = new Sucursales('', '', '', '', 0, '');
    this.empresasModelGetId = new Usuario('', '', '', 0, '', '', '', '');
    this.token = this._usuarioService.getToken()
  }

  departamentos = environment.departamentos;

  ngOnInit(): void {

      this._activatedRoute.paramMap.subscribe((dataRuta)=>{
        console.log(dataRuta.get('idEmpresa'));

        this.getSucursalesAdmin(dataRuta.get('idEmpresa'))
      })

    this.getSucursales();
    console.log(this.getProductos())
  }

  getProductos(){
    this._productosServiceEmpresa.obtenerProducto(this.token).subscribe(
      (response)=>{
        this.productosModelGet = response.Productos;
        console.log(this.productosModelGet)
      },
      (error)=>{
        console.log(error);
      }

    )
  }

  putProductosSucursal(){
    this._productosService.EnviarProducto( this.sucursalesModelGetId._id ,this.productoModelPost, this.token).subscribe(
      (response)=>{

        console.log(response);

        this.productoModelPost.idSurcursal = '';
        this.productoModelPost.NombreProductoSucursal = '';
        this.productoModelPost.StockSurcursal = 0;
        this.productoModelPost.CantidadVendida = 0;

        Swal.fire({
          icon: 'success',
          title: 'Producto Enviado Correctamente',
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

  postSucursales() {
    this._sucursalesService.IngresarSucursales(this.sucursalesModelPost, this.token).subscribe(
      (response)=>{
        console.log(response);

        this.sucursalesModelPost.nombre = '';
        this.sucursalesModelPost.telefono = '';
        this.sucursalesModelPost.direccion = '';
        this.sucursalesModelPost.vendido = 0;
        this.sucursalesModelPost.idEmpresa = '';
        this.getSucursales()
        Swal.fire({
          icon: 'success',
          title: 'Sucursal Agregado Correctamente',
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

  getSucursales() {
    this._sucursalesService.obtenerSucursales(this.token).subscribe(
      (response) => {
        this.load = true;
        this.sucursalesModelGet = response.Sucursales;
        console.log(this.sucursalesModelGet)
      },
      (error) => {
        console.log(error);
      }
    )

  }

    getSucursalesAdmin(idEmpresa){
      this._sucursalesService.obtenerSucursalesAdmin(idEmpresa, this.token).subscribe(
        (response)=>{
          this.sucursalesModelGet = response.Sucursales;
          console.log(this.sucursalesModelGet)
        },
        (error)=>{
          console.log(error);
        }
      )

      }

    getSucursalesId(idSucursal){
      this._sucursalesService.obtenerSucursalesId(idSucursal,this.token).subscribe(
        (response)=>{
          this.sucursalesModelGetId = response.Sucursal;
          console.log(this.sucursalesModelGetId)

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

  putSucursales() {
    this._sucursalesService.editarSucursales(this.sucursalesModelGetId, this.token).subscribe(
      (response) => {
        this.getSucursales()
      }, (error) => {
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

  eliminarSucursales(id) {

    Swal
    .fire({
        title: "¿Estas Seguro de Eliminar?",
        icon: 'warning',
        iconColor: "#0D6EFD" ,
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        confirmButtonColor: "#0D6EFD",
        cancelButtonText: "Cancelar",
    }).then(resultado => {
      if (resultado.value) {
          // Hicieron click en "Sí"
          this._sucursalesService.eliminarSucursales(id, this.token).subscribe(
            (response) => {
              this.getSucursales()
              Swal.fire({

                icon: 'success',
                title: 'eliminado exitosamente',
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
      } else {
          // Dijeron que no

      }
  });


  }

  getEmpresasId(idEmpresa) {
    this._usuarioService.obtenerEmpresaId(idEmpresa, this.token).subscribe(
      (response) => {
        this.empresasModelGetId = response.Empresa;
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

  putEmpresa() {
    this._usuarioService.editarEmpresa(this.empresasModelGetId, this.token).subscribe(
      (response) => {
        this.getEmpresas()
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

  getEmpresas() {

    this._usuarioService.VerEmpresas(this.token).subscribe(
      (response) => {
        this.empresasModelGet = response.Empresas;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
