function botao(){
    document.getElementById("Agradecimento").innerHTML = "<b> Obrigado por clicar!</b>";
   // console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //window.open("https://globallabs.academy/");
    window.location.href = "https://globallabs.academy/";
}

function trocar (elemento){
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouser!";
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar (elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui";

}

function load (){
    alert("Página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}
/*
function botao(){
    alert("Obrigado por clicar!")
}
*/



/*function soma (n1, n2){
    return n1 + n2;
}
var validar;
function validaidade(idade){
    
    if(idade >=18){
        validar = true
    }else {
        validar = false
    }
    return validar;

}

var idade = prompt("Qual sua idade?: ")
console.log(validaidade(idade));
*/


/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}


alert(soma(5,10));
alert(setReplace("Vai japão", "japão", "Brasil"));
*/


/*var d = new Date();
alert(d); //mostra a data do dia.
*/

/* var d = new Date();
alert(d.getMonth()+1); //mostra o mes
     (d.getMinutes()); // minutos;
     (d.getDay()); //Dia.
     (d.getHours()) //hora. 

*/

/*var count;
for(count = 0; count <= 5; count++){
    console.log(count);
};
*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    count ++; 
};
*/



/*
var idade = prompt("Qual sua idade?")
//var idade = 18;
if (idade >= 18){
    alert('Maior de idade');
}else{
    alert("De menor!"); 
}; */




/*var frutas = [{nome: "Maça", cor: "Vermelha"}, {nome: "Uva", cor: "Verde"}, {nome: "Laranja", cor: "Laranja"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "Maça", cor: "Vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["Maça", "Péra", "Laranja"];
//lista.push("Uva") //push é para adicionar
//lista.pop();
//console.log(lista.join( " - "));
//console.log(lista.toString()); // transforma em string.
//console.log(lista.reverse()); //de tras pra frente.
//console.log(lista.length); //mostra o tamanho da lista.
//console.log(lista);
//console.log(lista[1]);
//alert(lista[1]);


//var nome = "Manoela Vyctoria";
//var idade = "20";
//var idade2 = "10";
//var frase = "Santos é o melhor time do MUNDO!"
// alert("BEM VINDO! " + nome + " Tem " + idade + " Anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace ("Santos", "Sport Clube Do Recife"));
//console.log(frase.toUpperCase()) //MAIUSCULO
//alert(frase.replace("Santos", "Sport"));
