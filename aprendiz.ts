export enum NivelEducativo{
    BACHILLERATO="Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSGRADO = "Posgrado"
}


export class Aprendiz{ //expor es para que esta clase pueda ser visible desde otros archivos
    constructor(public nombres: string, public apellidos: string, public avatar: string, public edad:number, public nivelEducativo: NivelEducativo){

    }
}