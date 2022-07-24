import inquirer from "inquirer"

import {Cadastro} from "./cadastro.js"

export async function cadastroMenu() {
    return inquirer
    .prompt([
        {
            message: "Insira seu CPF:",
            type: "input",
            name: "cpf",
        },
        {
            message: "Insira a data da viagem:",
            type: "input",
            name: "data",
        },
        {
            message: "Insira a origem da viagem:",
            type: "input",
            name: "origem",
        },
        {
            message: "Insira o destino da viagem:",
            type: "input",
            name: "destino",
        },
        {
            message: "Insira o valor da viagem:",
            type: "input",
            name: "valor",
        },
    ])
}

export function atualizacao(){
    return inquirer.prompt([
        {
            type: "list",
            Name: "opcao",
            message: "Selecione a atualização desejada:",
            choices: [
                "Alterar Destino",
                "Alterar Data",
                "Alterar Origem",
                "Alterar Valor"]
                }
        ])
}

export async function validarInicio(option,cadastro_novo){
    if(option == "Cadastro"){
    let cliente = await cadastroMenu()
    .then((answer) => {
        const viagem = new Cadastro(answer.cpf, answer.data,answer.origem, answer.destino, answer.valor);
        console.log(viagem)
        return viagem
    })
    return cliente
}
    else if(option == "Atualizar"){
        let cliente = await atualizacao()
        .then((resposta) =>console.log(resposta))
    }
}

export async function listaClientes(clientesArray){
    let clientes = await validarInicio()
    .then((cliente) => clientesArray.push(cliente))
}

let clienteObj = await validarInicio("Cadastro")
//validarInicio("Atualizar", clienteObj)
//listaClientes("Atualizacao")