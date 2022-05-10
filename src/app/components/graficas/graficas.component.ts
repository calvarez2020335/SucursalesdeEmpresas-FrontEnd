import { Component, OnInit } from '@angular/core';
import { ProductoSucursalService } from 'src/app/services/productoSucursal.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss'],
  providers: [UsuarioService, ProductoSucursalService]
})
export class GraficasComponent implements OnInit {
  chartOptions = {
    responsive: true,
  };

  //NOMBRES PRODUCTOS
  chartLabels:any = [];
  //CANTIDAD PRODUCTOS
  chartData:any = [];
  chartColors:any = [
    {
      backgroundColor: []
    }
  ];
  chartLegend = true;
  chartPlugins = [];


  public productosModelGet: any = [];
  public token;

  constructor(
    public _usuarioService: UsuarioService,
    private _productoSucursalService: ProductoSucursalService,
    public _activatedRoute: ActivatedRoute
  ) {

    this.token = this._usuarioService.getToken()
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idSurcursal'));

      this.getProductoSucursal(dataRuta.get('idSurcursal'))

    })
  }

  getProductoSucursal(idSurcursal){
    this.productosModelGet = []
    this.chartData = []
    this._productoSucursalService.ObtenerProductoSucursal(idSurcursal, this.token).subscribe(
      (response)=>{

        this.productosModelGet = response.Productos;
        this.productosModelGet.forEach(dato => {
          this.chartLabels.push(dato.NombreProductoSucursal);
          this.chartData.push(dato.CantidadVendida);
          this.chartColors[0].backgroundColor.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
          console.log(dato)
        })
        console.log(this.productosModelGet)
        
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };

}
