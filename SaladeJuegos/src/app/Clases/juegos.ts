export class Juegos {
    nombre:string;
    numerosecreto:number;
    gano:boolean;
    jugador:string;
    numeroIngresado:number;
    iniciado:boolean;
    constructor(nombre:string)
    {
        this.nombre = nombre;
        this.iniciado = false;
        
    }
    generarNuevo()
    {
        this.numerosecreto = Math.floor((Math.random()*100)+1);
        console.log("numero: ", this.numerosecreto);
    }

    Verificar()
    {
        if(this.numerosecreto===this.numeroIngresado)
        {
            this.gano=true;
             this.iniciado = false;
        }
        else
        {
        this.gano=false;
         this.iniciado = true;
        
        }
    }
}
