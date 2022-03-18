//data do evento
var diaEvento = 09
var mesEvento = 03
var anoEvento = 2022

//data atual
var diaAtual = 10
var mesAtual = 03
var anoAtual = 2022

//validação por data
if(diaEvento>=diaAtual){
    if(mesEvento>=mesAtual){
        if(anoEvento>=anoAtual){
            console.log("Cadastro permitido")    
    }else{
        console.log("Cadastro não permitido por data inválida")
    }
 }else{
    console.log("Cadastro não permitido por data inválida") 
 }
 }else{
  console.log("Cadastro não permitido por data inválida")
 }

 var idade = 15

 //validação por idade
 if(idade>=18){
     console.log("Cadastro permitido")
 }else{
     console.log("Cadastro não permitido pela idade")
 }

 //validação por participantes
 var participantes = ["José", "Bruno", "Lucas","Breno","Glauber"]
 if (participantes.length< 100){
     console.log("Cadastro permitido")
}else{
    console.log("Cadastro não permitido. Limite de participante")
}