import express, { Request, Response } from "express";
import cors from "cors";
import {Conta, pagamento} from "./Contas";

let errorCode: number = 400
let contas:Conta[]=[]

const app = express()

app.use(express.json()),
app.use(cors())

//Criar contas
app.post("/novaconta",(req:Request,res:Response)=>{
    try{
        //busca os dados no body do enpoint
        const[dia,mes,ano] = req.body.nascimento.split("/")

        const dataNascimento: Date = new Date(`${ano}-${mes}-${dia}`)

        const idade:number = Date.now() - dataNascimento.getTime()        
        const idadeFinal:number = idade 
        

        if(idadeFinal <18){
            errorCode=405
            throw new Error('Para criar conta cliente tem que ser maior de 18 anos')
        }                    
        const novaConta:Conta={
            id:Date.now(),
            nome:req.body.nome,
            cpf:req.body.cpf,
            nascimento:dataNascimento,
            saldo:0,
            extrato:[]
        }
        if(!req.body.nome || !req.body.cpf || !req.body.nascimento){
            errorCode=423
            throw new Error ('Preencha corretamente todos os campos.')
        }
        if(contas.length!==0){
            const encontraCpf = contas.findIndex((dados=>
                dados.cpf===novaConta.cpf
            ))
            if(encontraCpf!==-1){
                errorCode=400
                throw new Error('CPF já cadastrado')
            }
        }
        contas.push(novaConta)
        res.status(200).send({message:'Conta criado com sucesso!'})
    }
    catch(error){
        res.status(errorCode)
    }
})

//endpoint para verificar todas as contas cadastradas
app.get("/contas",(req:Request,res:Response)=>{
    try{
        //verifica se a conta está vazia ou não.
        if(contas.length===0){
            errorCode = 404
            throw new Error('Nenhuma conta cadastrada !')
        }
        res.status(200).send(contas)
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }

})







app.listen( 3003, () => {
    console.log("o servidor esta disponivel na porta 3003")
})