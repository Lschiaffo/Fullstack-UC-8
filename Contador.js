//Criar um contador de 0 a 10
//
for(let contador = 5;contador <=10;contador ++)
{
//Código que será repetido
    
        //Localizar número 8
    if(contador ==8){
        //resultado da condição for verdadeiro
        console.log(contador + " O número foi localizado")
    }else{
        //resultado da condição falso
        console.log(contador + " O número não foi localizado")
    }
}    
//Criar um laço para exibir se o número é impar ou par

let numeros = 20

for(let contador = 0; contador <= numeros; contador++){    
    //mod é o resto da divisão
    if(contador % 2 == 0){
        console.log(contador+" é PAR")
    }else{
        console.log(contador+ " é IMPAR")
    }
}
     
//registrar 5 nomes
//Array com 4 posições
//...............0......1.........2.........3
let nomes = ["Carlos","Ronaldo","Odirley","Cinthya"];



for (let contador =0; contador <=3; contador ++)
{
    console.log(nomes [contador]);
   
    
}