// Variaveis
// let idade = 5
// console.log(idade)
// let altura = 180
// console.log(altura)
// camelCase
// let nome, idade, altura;
// Defininição de Variavel imprimindo na tela

// Contantes
// const valorIngressoAdulto = 20;
// console.log(valorIngressoAdulto);

// Tipos de referencia
// let nome ='Julia'; //string literal
// let idade = 27; // number literal
// let estaAprovado = true; //boolean
// let sobrenome = undefined; //indefinida
// let corSelecionada = null;

//Objetos
//Juntar infos no lugar so podendo acessar pelo objeto
//Objeto pessoa
// let pessoa = {
//     nome:'Julia',
//     idade: 27,
//     estaAprovado: true,
//     sobrenome:'Cabral'
// };
// console.log(pessoa);

//Arrays
// let familia =[true,35,'Julia', 27 ];
// console.log(familia.length) 
// console.log(familia[2])

//Arrays
// let colega =[true,25,'Leonardo', 'Porto Alegre', 28 ];
// console.log(colega.length);
// console.log(colega[1]);
// console.log(colega[2])

//Funçoes
// let corSite = 'azul'
// function resetCor(cor, tonalidade){
//      corSite = cor + ' ' + tonalidade;
// };
// console.log(corSite);
// resetCor("azul", "marinho");
// console.log(corSite)

//tipos de função (realiza a tarefa e nao devolve nada)
// function dizerNome(){
//       console.log('Julia');
// }
// dizerNome();

//Faz uma operação e retorna algo
// function multiplicarValor(valor){
//     return valor* 2;
// }
// console.log(multiplicarValor(5));
// let resultado = (multiplicarValor(5));
// console.log(resultado);

////////////////////////////////////////////

//Operadores aritimeticos
// let salario = 100;
//+, -, *, /, **

// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario / salario);
// console.log(salario ** salario);

//++, --(op incrementos e decrementos)
//let idade = 18;
//console.log(++idade);

// Atribuiçao
// let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer
// valorTecladoGamer += valorTecladoGamer;
// console.log(valorTecladoGamer);

//Operadores igualdade
//Igualdade estrita
// console.log( 1===1 ); true
// console.log(1 ==='1'); false

//Igualdade solta
// console.log(1===1); true
// console.log(1=== '1'); true

//Operador Ternario
//tem um cliente, +100 pontos é premium, senao comum

// let pontos = 200;
// let tipo = pontos >100 ? 'premium' : 'comum';
// console.log(tipo);

//operadores logicos e (&&)
//Retorna TRUE se os dois operadores sao true

// console.log (true && true); (retorna true)
// console.log (false && true); (retorna false)

// let maiorDeIdade = true;
// let possuiCarteiraDetrabalho = true;
// let podeAplicar=maiorDeIdade && possuiCarteiraDetrabalho;
// console.log(podeAplicar);

//Operadores lógicos ou (||)
//retorna true se um dos operandos for true
//console.log(true && true); (retorna true)

//console.log(false && true); (retorna false)
//let maiorDeIdade = false;
//let possuiCarteiraDeTrabalho = true;
//let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
//console.log(podeAplicar);

//Operadores lógicos NOT ( ! )
//let candidatoRecusado = !podeAplicar;
//console.log(candidatoRecusado);