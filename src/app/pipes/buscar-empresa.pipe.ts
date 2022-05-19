import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarEmpresa'
})
export class BuscarEmpresaPipe implements PipeTransform {

  transform(productosEmpresas:any, busqueda:any):any {

    if(busqueda == undefined){
      return productosEmpresas;
    }else{
      return productosEmpresas.filter(productosEmpresa=>{
        return productosEmpresa.NombreProducto.toLowerCase().includes(busqueda.toLowerCase());
      })
    }

  }

}
