import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarEmpresaProveedor'
})
export class BuscarEmpresaProveedorPipe implements PipeTransform {

  transform(ProveedorEmpresas:any, busqueda:any):any {

    if(busqueda == undefined){
      return ProveedorEmpresas;
    }else{
      return ProveedorEmpresas.filter(ProveedorEmpresa=>{
        return ProveedorEmpresa.NombreProveedor.toLowerCase().includes(busqueda.toLowerCase());
      })
    }

  }

}
