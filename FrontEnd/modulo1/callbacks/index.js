// EXERCICIO INTERPRETAÇÃO
//1) 
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
  */
  //a) Será repetido o conteúdo da array "usuarios"
  
  //2)
  /*
  const usuarios = [
   { nome: "Amanda Rangel", apelido: "Mandi" },
   { nome: "Laís Petra", apelido: "Laura" },
   { nome: "Letícia Chijo", apelido: "Chijo" },
 ]
 
 const novoArrayB = usuarios.map((item, index, array) => {
    return item.nome
 })
 
 console.log(novoArrayB)
 //Após o mapeamento será impresso a nova array ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']
*/

//3)
const usuarios = [
   { nome: "Amanda Rangel", apelido: "Mandi" },
   { nome: "Laís Petra", apelido: "Laura" },
   { nome: "Letícia Chijo", apelido: "Chijo" },
 ]
 
 const novoArrayC = usuarios.filter((item, index, array) => {
    return item.apelido !== "Chijo"
 })
 
 console.log(novoArrayC)
