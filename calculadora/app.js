/* Projeto Calculadora em Javascript */
function calcular(){
    var valor1 = document.formCalculadora.valor1.value;
    var valor2 = document.formCalculadora.valor2.value;
    var operador = document.formCalculadora.oper.value;
    /* Exemplo de validação */
    if (valor1 <0 || valor2 <0){
        alert("os valores não podem ser negativos!");
        return false;
    }
    /*operação matematica*/
    if (operador === 'soma'){
        var res = parseFloat(valor1) + parseFloat(valor2);
    } else if (operador === 'subtracao'){
        var res = parseFloat(valor1) - parseFloat(valor2);
    } else if (operador === 'multiplicacao'){
        var res = parseFloat(valor1) * parseFloat(valor2);
    } else if (operador === 'divisao'){
        var res = parseFloat(valor1) / parseFloat(valor2);
    } else{
        alert('Não foi selecionado nenhum operador!'); return false;
    }
    /* exibindo o calculo na interface*/
    document.formCalculadora.resultado.value = res;
}

