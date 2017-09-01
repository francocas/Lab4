export class Juegos2 {
    numero1:number;
    numero2:number;
    operador:string;
    resultado:number;
    resultadoIngresado:number;
    gano:boolean;
    iniciado:boolean;
    GenerarCalculo()
    {
        this.numero1=Math.floor((Math.random()*9)+0);
        this.numero2=Math.floor((Math.random()*9)+0);
        let varParaSwitch = Math.floor((Math.random()*4)+1);
        switch (varParaSwitch) {
            case 1:
                this.operador = "+";
                this.resultado = this.numero1 + this.numero2;
                break;
            case 2:
                this.operador = "-";
                this.resultado = this.numero1 - this.numero2;
                break;
            case 3:
                this.operador = "*";
                this.resultado = this.numero1 * this.numero2;
                break;
            case 4:
                this.operador = "/";
                this.resultado = this.numero1 / this.numero2;
                break;
        }
        console.log(this.resultado);
    }
        Verificar()
    {
        if(this.resultado===this.resultadoIngresado)
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
