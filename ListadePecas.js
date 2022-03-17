var listadePecas = ["Amortecer","Motor","Filtro de ar"]

let peso = 50
if (peso < 100) {
    console.log("A peça deve passar no minimo 100g")
}else{ 
    console.log("A peça possui peso adequado")   
}

var listaDePecas = ["Amortecedor", "Motor", "Filtro de ar", "Amortecedor"]

if (listadePecas.lenght < 10) {
    console.log("Ainda tem espaço")
}else{
    console.log("Não tem mais espaço")
}        

let nomePeca = "Disco de Freio"
if( nomePeca.lenght >3){
 console.log("Nome da peça esta adequado")
}else if (nomePeca.lenght ==0) {
    console.log("Nome da peça não pode ser vazio")
}else {
    console.log("Nome da peça precisa ter no minimo 3 caracteres")
}    