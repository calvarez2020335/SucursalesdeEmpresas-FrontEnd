export class Sucursales {
  constructor(
    public _id: String,
    public nombre: String,
    public telefono: String,
    public direccion: String,
    public stock: Number,
    public vendido: Number,
    public idEmpresa: String
  ){}
}
