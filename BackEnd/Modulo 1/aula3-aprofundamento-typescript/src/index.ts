
//a)
let minhaString: string 

minhaString = 5

//Obs: Não aceita pois atribuimos como String.

//b)
let meuNumero: number | string

meuNumero = 5
meuNumero = "Labenu" 


//c)
type person = { nome: string, idade: number, corFavorita: string } = {
    nome: "Vaughan";
    idade: 20;
    corFavorita: "Azul";
}


