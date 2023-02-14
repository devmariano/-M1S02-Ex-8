let produtos=[]
let total= parseFloat(0)
function myFunction()
{
//zera produtos
produtos=[];
//inicia inserção de itens da compra
do{
    var preco=prompt("Digite o valor do produto: (ou 0 para encerrar)");
    produtos.push(parseFloat(preco.replace(',', '.')).toFixed(2))
    //document.getElementById("resumo").innerHTML=produtos;

}while(preco!=0)
var nota=""
    produtos.forEach(exibe);
    function exibe(item, index, arr){
        total=parseFloat(total)+parseFloat(arr[index])
        total=parseFloat(total).toFixed(2)
        nota=nota+"Produto "+(index+1)+" : R$ "+arr[index]+"<br>"
        console.log(nota) 
    }
var pago=parseFloat(prompt("Total da compra R$"+total+" Insira o valor recebido:")).toFixed(2);
var troco=parseFloat(pago).toFixed(2)-parseFloat(total).toFixed(2)
troco=parseFloat(troco).toFixed(2)
document.getElementById("resumo").innerHTML="Lojas Tabajara<br>"+nota+"<br>Total: R$"+total+"<br>Dinheiro: R$"+pago+"<br>Troco: R$"+troco;
}