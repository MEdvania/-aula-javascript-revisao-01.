/*
1) Exibir no console o resultado das seguintes validações, dado o valor da variável _numero:
a) Se o valor para menor que zero, mostrar: O valor número é um Número negativo.
b) Se o valor para maior ou igual a zero, mostrar: O valor número é um Número positivo.
* /

deixe  numero  =  1  ;

deixe  resultado  =  numero  > =  0 ? 'O valor do número é positivo. ' :
'O valor do número é negativo.'
console . log ( resultado )

/*
2) Criar uma função em javascript que receba três parâmetros numéricos valor A, valor B e valor C, validar se:
a) O (valor A + valor C) é maior que valorB
   i) Se for, não exibir nenhum console de valores de valor A + Valor C e a soma deles.
   ii) Se não for, não exibir nenhum console que os valores de valor A + Valor C é igual ao valor B.
*/

function  validacao ( valorA ,  valorB ,  valorC ) {
  let  resultado  =  ( valorA + valorC )  >  valorB ? console . log ( "Os valores denominados foram" , valorA , "e" , valorC , "," ,  "e soma deles é:" , valorA + valorC ) :
  console . log ( 'O valor de A + C é igual ao valor B.' )
} validacao ( 4 , 8 , 4 )

/*
3) Os alunos da turma de Front-end estão estudando em horários diferentes:
a) Se o horário for o matutino, mostrar a mensagem "Bom Dia!".
b) Se o horário para vespertino, mostrar "Boa Tarde!".
c) Se o horário da noite, mostrar "Boa Noite!".
d) Se não houver informação, mostrar "Valor Inválido!".
* /

deixe  horario  = ""
switch ( horario ) {
  case  horario  =  "matutino" :
    console . log ( "Bom dia!" )
  pausa ;
  case  horario  =  "vespertino" :
    console . log  ( "Boa tarde!" )
  pausa ;
  case  horario  =  "noturno" :
    console . log ( "Boa noite!" )
  pausa ;
  padrão :
    console . log  ( "Valor inválido!" )
}