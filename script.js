// Começando curso no dia 24.09.22 ás 00:10 Sobre JavaScript.

/* -- COMEÇO DO COMENTÁRIO

// DECLARANDO AS VARIÁVEIS

let idade = 16; // Variável idade é igual á 16
let altura = 1.50; // Variável altura é igual á 150
var filhos = 3; // Variável filhos é igual á 3
var casa = 1; // Variável casa é igual á 1

// APRESENTANDO-AS NO CONSOLE

console.log("A idade é de " + idade + " anos.") // Console.log faz com que o comando seja apresentado no console
console.log("Sua altura é de " + altura + " metros."); // Apresente o valor de altura(150) no console!!

// DIFERENÇAS DAS VARIÁVEIS

// let

let IngressoAdulto = 20; // Usando o let podemos atualizar seus valores
console.log("Valor do Ingresso Adulto custa" + IngressoAdulto + " Reais."); // Apresentando valor

IngressoAdulto = 40; // Novo valor do IngressoAdulto
console.log("Novo valor do Ingresso Adulto custa " + IngressoAdulto + " Reais."); // Apresentando novo valor

// const

let IngressoIdoso = 10;  // Usando o const NÃO podemos alterar os valores..
console.log("Valor do Ingresso Idoso é " + IngressoIdoso + " Reais."); 

IngressoIdoso = 15; // "Novo valor do IngressoIdoso"
console.log("Novo valor do Ingresso Idoso é " + IngressoIdoso + " Reais."); // Agora na hora de apresentar ao console ocorrera um erro!!

// TIPOS PRIMITIVOS - 1 - [Referências] 2 - [Valores]

let nome = "Carlos."; // String literal
let idade1 = 32; // Number literal
let seteSaisDeFiló = false; // Boolean - True or False
let sobrenome = undefined; // Undefined - Não definido - Padrão
let corSelecionada = null; // Valor 0 - Nada - Vazio - Redefinir valor

console.log("Nome do seu amigo é " + nome);
console.log("E ele tem " + idade1 + " Anos.");
console.log("A barata diz que tem sete saisa de filó.. E ela esta" + seteSaisDeFiló + ".");
console.log("Sobre nome dele é esse " + sobrenome + ".");
console.log("Sua cor selecionada foi " + corSelecionada + ".");

// Indo mimir as 00:58 do dia 24.09.2022
// Voltando para aula as 09:03 do dia 24.09.22

// TIPAGEM DINÂMICA - No console podemos ver cada tipo de variável usando o typeof (nome da variável).

console.log("Antes");
console.log("Sobrenome é " + typeof sobrenome);

console.log("Depois..")
sobrenome = "Marques";
console.log("Sobrenome é " + typeof sobrenome);


// OBJETOS - Objects


// Variáveis 

let nome = 'Clara';
let idade = 24;
let Bolsonaro22 = false;
let sobrenome = undefined;



let pessoa = { // Usando o objects nós podemos declarar varias variáveis 
    nome: 'Clara', // Separamos as variáveis com vírgulas..
    idade: 24,
    Bolsonaro22: false, 
    sobrenome: 'Santo'
 };

 console.log(pessoa) // Exibindo as variáveis de pessoa

*/ // FINAL DO COMENTÁRIO

// Arrays

let familia = [24,'Trinta e dois',91,12]; // Valores são definidos em ordem começando pelo 0... Exem [24, 46, 75] O valor de 24 esta no 0. E o valor de 75 esta na 2 posição

console.log(familia);  // Apresenta no console o array familia 

console.log(familia[2]);  // Apresentando valor na segunda posição = 91...









