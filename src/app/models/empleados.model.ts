export class Empleados{
    constructor(
    public nombre: String,
    public apellido: String,
    public puesto: String,
    public departamento: String,
    public empresas: [{
        idEmpresa: String
    }]
    ){}
}
