import inquirer from "inquirer"

export function abertura(){
    console.log('--------------------------------------------------------');
    console.log('Olá! Bem-vinda(o) ao sistema da agência Node Viagens!');
    console.log(`Arquitetura do Processo: ${process.arch}`)
    console.log(`Número do Processo: ${process.pid}`);
    console.log(`Plataforma do Processo: ${process.platform}`);
    console.log('--------------------------------------------------------\n');
}

export function menu(){
    return inquirer.prompt([
        {
        type: "list",
        name: "opcao",
        message: "Selecione uma das opções abaixo:",
        choices: [
            "Criar Reserva",
            "Checar Reservas -- Simplificado",
            "Checar Reservas -- Completo",
            "Atualizar Reserva",
            "Deletar Reserva"]
        }
    ])/*
    .then((answers) => { 
        let respostaFinal = JSON.stringify(answers.opcao, null, "  ")
        return respostaFinal;
    }
    );*/
}