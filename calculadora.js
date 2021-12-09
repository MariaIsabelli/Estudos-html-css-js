function calculadora(){
    const operacao = number(prompt('Escolaha uma operação:\n 1 - Soma {+}\n 2- Subtração {-}\n 3- multiplicação {*}\n 4- Divisão  {/}\n 5-Divisão inteira {%}\n 6- Potenciação {**}'));

if (!operacao || operacao > 7){
    alert('Erro ! Operação inválida!');
    calculadora();
}else{
    let n1 = number(prompt ('Insira o primeiro valor: '));
let n2 = numbeer(prompt('Insira o segundo avlor : '));
let resultado;

if (!n1 || !n2){
    alert('Erro! paraemetros necessários !')
    calculadora();
}else{

function soma (){
resultado = n1 + n2;
alert(`${n1} + ${n2} = ${resultado}`)
novaOperacao();
}
function subtracao (){
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao();
    }
    function multiplicacao (){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao();
        }
        function divisao (){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
            }
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao();
                }
                function pontenciacao(){
                    resultado = n1 ** n2;
                    alert(`${n1} ** ${n2} = ${resultado}`)
                    novaOperacao();
                    }
   
function novaOperacao(){
    let opcao =  prompt('Deseja fazer outra operação ? \n 1- Sim\n 2- Não');
    if (opcao == 1){
        calculadora();
    }else if (opcao ==2){
        alert('Até mais !!')
    }else{
        alert('digite uma opção válida, por favor !')
        novaOperacao();
    }
}                  
}
/*
if (operacao = 1){
    soma();
}else if (operação == 2){
    subtracao();
}else if (operacao == 3 ){
    multiplicacao();
}else if (operacao == 4){
    divisaoReal();
}else if (operacao == 5){
    divisaoInteira();
}else if (operacao == 6 ){
    potenciacao();
}
*/
switch(operacao){
    case 1 :
        soma();
        break;
        case 2 :
            subtracao();
            break;
            case 3 :
            multiplicaao();
            break;
            case 4:
            divisaoReal();
            break;
            case 5:
            divisaoInteira();
            break;
            case 6 :
            potenciacao();
            break;

}

}

}
calculadora();



