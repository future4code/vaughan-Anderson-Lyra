//Exercício 1

//a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
//R: É o método padrão para criar uma instância de classe e pode receber parâmetros.

//  constructor (nome:string) {
//     this.nome = nome
//      }

// const novaInstancia = new Instancia("nome2")

//Exercício 2

class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }

    public getDescription(): string {
        return this.description
    }
    public getValue(): number {
        return this.value
    }
    public getDate(): string {
        return this.date
    }
}

const transaction1 = new Transaction("18/04/2022", 55, "pagamento do cartão")

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    insertTransaction(transaction: Transaction) {
        this.transactions.push(transaction)
    }
}

const pessoa = new UserAccount("012.123.456-78", "Anderson", 39)


//Exercício 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

} 