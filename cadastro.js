export class Cadastro{
    constructor(cpf, data,origem, destino,valor){
        this.cpf = cpf;
        this.data = data;
        this.origem = origem;
        this.destino = destino;
        this.valor = valor;
    }

    viewSimples(){
        console.log("Reserva - Visualização Simplificada: ")
        console.log(`Data: ${this.data}\nDe:${this.origem}\n para :${this.destino}\nValor: $${this.data}`)
    }
    viewCompleta(){
        console.log("Reserva - Visualização Completa: ")
        console.log(`Cliente: ${this.cpf}`)
        console.log(`Data: ${this.data}\nDe:${this.origem}\n para :${this.destino}\nValor: $${this.data}`)
    }
}