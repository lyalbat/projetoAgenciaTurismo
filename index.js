import {abertura} from "./boasVindas.js";
import {resolveMenu} from "./opcoes.js"

let usuarios = []

//Inicio do Processo

//abertura();
//resolveMenu()

async function main(){
    let run = await abertura()
    .then(() => await resolveMenu()
    )
}

main()