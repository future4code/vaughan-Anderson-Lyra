// 1 
// a - Não consegue porquê esta private.
// b - Uma vez.



class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string
  ) {
    console.log("Chamando o construtor da classe User")
    this.id = id
    this.email = email
    this.name = name
    this.password = password
  }

  public getId(): string {
    return this.id
  }

  public getEmail(): string {
    return this.email
  }

  public getName(): string {
    return this.name
  }
  public introduceYourself(): string {
    return `Olá sou ${this.name}. Bom dia!` //5
  }
}
const anderson = new User('123', 'aluno@gmail.com', 'anderson', 'labenu')
// 2 
// a - Vai chamar o classe user 2x, porquê ela é um extends de User.

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
    console.log(this.purchaseTotal, this.creditCard) // 3


  }

  public getCreditCard(): string {
    return this.creditCard;
  }

}

const vanessa = new Customer('val', 'vanessa@gmail.com', 'vanessa', 'jojfd', '644125')
vanessa.introduceYourself() // 4


// 3 
// a - Não é possível imprimir, pois é privada, somente o user tem acesso.


// 4
// a vanessa.introduceYourself()


// POLIORFISMO

// 1 
interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

const client: Client = {
  name: "Anderson",
  registrationNumber: 17,
  consumedEnergy: 200,

  calculateBill: (): number => {
    return 2;
  }
}
// a - Não é possível imporimir a função de calculatebill

// 2
// a - Não é possível criar instancia de classes abstratas

export abstract class Place {
  constructor(protected cep: string) { }

  public getCep(): string {
    return this.cep;
  }
}




// 3 


export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,

    cep: string
  ) {
    super(cep);
  }
}
const mercado = new Commerce(6, '325465')


class Industry extends Place {
  constructor(
    protected machinesQuantity: number,


    cep: string
  ) {
    super(cep);

  }
}


class Residence extends Place {
  constructor(
    private dwellersQuantity: number,

    cep: string
  ) {
    super(cep);
  }

  public getDwellersQuantity(): number {
    return this.dwellersQuantity
  }
  public getCep(): string {
    return this.cep
  }
}

const asAsul = new Residence(845231, '2')

// 4

class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

// a public e private, para proteger as inforamções

// 5
// a - semelhanças são os paramentros do constructor porque são os dados base
// b - a diferença é que uma tem floors e a outra residentes, o preço também.
class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }

  public getCnpj(): string {
    return this.cnpj;
  }
}


//  6

//  a - Instrual client deve ser filha da industria, porque o super dela é o machine
//  b - implementa o cliente porque a classe clientes tem a base de dados.
//  c- somente os getters pois não é necessário alterações de dados.


class IndustrialClinet extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private insdustryNumber: string, 
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustryNumber(): string {
    return this.insdustryNumber;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}
