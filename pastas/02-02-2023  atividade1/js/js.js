const json1 = '{"nome1": "Roger", "idade1": "50","profissao1": "Rei dos piratas","sexo1": "Masculino"}'
const json2 = '{"nome2": "Luffy", "idade2": "20","profissao2": " Rei dos pirartas","sexo2": "Masculino"}'
const json3 = '{"nome3": "Nami", "idade3": "23","profissao3": "Navegadora","sexo3": "Feminino"}'
const json4 = '{"nome4": "Sanji", "idade4": "25","profissao4": "Chef de cozinha","sexo4": "Masculino"}'
const json5 = '{"nome5": "Zoro", "idade5": "21","profissao5": "Espadachim","sexo5": "Masculino"}'
const json6 = '{"nome6": "Chopper", "idade6": "17","profissao6": "Medico","sexo6": "Masculino"}'

const teste1 = JSON.parse(json1);
const teste2 = JSON.parse(json2);
const teste3 = JSON.parse(json3);
const teste4 = JSON.parse(json4);
const teste5 = JSON.parse(json5);
const teste6 = JSON.parse(json6);


console.log(teste1)
console.log(teste2)
console.log(teste3)
console.log(teste4)
console.log(teste5)
console.log(teste6)

function botao1() {
    document.getElementById('nome').innerHTML = ("Nome: " + teste1.nome1);
    document.getElementById('idade').innerHTML = ("Idade: " + teste1.idade1);
    document.getElementById('profissao').innerHTML = ("Profissão: " + teste1.profissao1);
    document.getElementById('sexo').innerHTML = ("Sexo: " + teste1.sexo1);
    document.getElementById('pessoa').innerHTML = "<img src='img/roger.jpg' width = '250px' >"
}

function botao2() {
    document.getElementById('nome').innerHTML = ("Nome: " + teste2.nome2);
    document.getElementById('idade').innerHTML = ("Idade: " + teste2.idade2);
    document.getElementById('profissao').innerHTML = ("Profissão: " + teste2.profissao2);
    document.getElementById('sexo').innerHTML = ("Sexo: " + teste2.sexo2);
    document.getElementById('pessoa').innerHTML = "<img src='img/luffy.jpg' width = '250px' >"

}

function botao3() {
    document.getElementById('nome').innerHTML = ("Nome: " + teste3.nome3);
    document.getElementById('idade').innerHTML = ("Idade: " + teste3.idade3);
    document.getElementById('profissao').innerHTML = ("Profissão: " + teste3.profissao3);
    document.getElementById('sexo').innerHTML = ("Sexo: " + teste3.sexo3);
    document.getElementById('pessoa').innerHTML = "<img src='img/nami.jpg' width = '250px' >"
}

function botao4() {
    document.getElementById('nome').innerHTML = ("Nome: " + teste4.nome4);
    document.getElementById('idade').innerHTML = ("Idade: " + teste4.idade4);
    document.getElementById('profissao').innerHTML = ("Profissão: " + teste4.profissao4);
    document.getElementById('sexo').innerHTML = ("Sexo: " + teste4.sexo4);
    document.getElementById('pessoa').innerHTML = "<img src='img/sanji.jpg' width = '250px' >"
}

function botao5() {
    document.getElementById('nome').innerHTML = ("Nome: " + teste5.nome5);
    document.getElementById('idade').innerHTML = ("Idade: " + teste5.idade5);
    document.getElementById('profissao').innerHTML = ("Profissão: " + teste5.profissao5);
    document.getElementById('sexo').innerHTML = ("Sexo: " + teste5.sexo5);
    document.getElementById('pessoa').innerHTML = "<img src='img/zoro.jpg' width = '250px' >"
}

function botao6() {
    document.getElementById('nome').innerHTML = ("Nome: " + teste6.nome6);
    document.getElementById('idade').innerHTML = ("Idade: " + teste6.idade6);
    document.getElementById('profissao').innerHTML = ("Profissão: " + teste6.profissao6);
    document.getElementById('sexo').innerHTML = ("Sexo: " + teste6.sexo6);
    document.getElementById('pessoa').innerHTML = "<img src='img/chopper.jpg' width = '250px' >"
}

    


//  document.getElementById('nome1').innerHTML = ("Nome: " + teste1.nome1);
//  document.getElementById('idade1').innerHTML = ("Idade: " + teste1.idade1);
// document.getElementById('profissao1').innerHTML = ("Profissão: " + teste1.profissao1);
//  document.getElementById('sexo1').innerHTML = ("Sexo: " + teste1.sexo1);



// document.getElementById('nome2').innerHTML = ("Nome: " + teste2.nome2);
// document.getElementById('idade2').innerHTML = ("Idade: " + teste2.idade2);
// document.getElementById('profissao2').innerHTML = ("Profissão: " + teste2.profissao2);
// document.getElementById('sexo2').innerHTML = ("Sexo: " + teste2.sexo2);



// document.getElementById('nome3').innerHTML = ("Nome: " + teste3.nome3);
// document.getElementById('idade3').innerHTML = ("Idade: " + teste3.idade3);
// document.getElementById('profissao3').innerHTML = ("Profissão: " + teste3.profissao3);
// document.getElementById('sexo3').innerHTML = ("Sexo: " + teste3.sexo3);
