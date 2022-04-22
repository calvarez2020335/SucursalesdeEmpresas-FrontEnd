export class Usuario {
  constructor(
    public _id: String,
    public nombre: String,
    public email: String,
    public telefono: Number,
    public direccion: String,
    public password: String,
    public rol: String,
    public tipoEmpresa:String
  ){}
}
