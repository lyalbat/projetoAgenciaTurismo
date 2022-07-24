/*
const newArray = array.map(bibliotecario => {
    const [nome, sobrenome] = bibliotecario.nome_bibliotecario.split(' ')

    bibliotecario.apelido_bibliotecario = `${nome.charAt(0)}. ${sobrenome}`

    return bibliotecario
})
*/

import {menu} from "./boasVindas.js"
import {Cadastro} from "./cadastro.js"
import {cadastroMenu, validarInicio} from "./funcoesCadastro.js"
let usuarios = []


export async function resolveMenu(){
    let result = await menu().then((choice) =>
    {
        if(choice.opcao =="Criar Reserva"){
            const cliente = validarInicio()
            .then((elemento) => {
                const clienteObj = JSON.parse(JSON.stringify(elemento));
                usuarios.push(clienteObj)
                console.log(usuarios)
                return clienteObj
             }
            )
        }
        else if(choice.opcao == "Checar Reservas -- Simplificado"){
            if(clienteObj != undefined){
                clienteObj.viewSimples()
            }    
        }
        else if(choice.opcao == "Checar Reservas -- Completo"){
            if(clienteObj != undefined){
                clienteObj.viewCompleta()
            }
        }
        else if(choice.opcao == "Atualizar Reserva"){
            console.log('choice.opcao')
        }
        else if(choice.opcao == "Deletar Reserva"){
            console.log('choice.opcao')
        }
        else{console.log('erro')}
        return choice
    })
}
