import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreProductoSucursal'
})
export class NombreProductoSucursalPipe implements PipeTransform {

  transform(ProductoSucursal:any, busqueda:any):any {

    if(busqueda == undefined){
      return ProductoSucursal;
    }else{
      return ProductoSucursal.filter(ProductoSucursal=>{
        return ProductoSucursal.NombreProductoSucursal.toLowerCase().includes(busqueda.toLowerCase());
      })
    }

  }

}
