export class Usuario{

    constructor(
    public nombre:string,
    public nick:string,
    public tipo:string,
    public password:string,
    public estado?:number,
    public _id?: string
    ){}
}