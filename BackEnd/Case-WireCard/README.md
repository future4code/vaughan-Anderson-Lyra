# CASE WIRECARD



Este é um projeto de Backend, utilizando Typescript, MySQL, além das bibliotecas knexJs e expressJs, desenvolvido para atender aos modelos REST API.

## DESCRIÇÃO DO PROJETO

O projeto consiste em simular a metodologia CRUD na estruturação de Plataforma de Pagamentos WIRECARD, criando e acessando informações de pagamentos, nas formas de boleto e cartão de crédito, e sendo criado endpoints GET e POST para alimentar as demandas.

## DOCUMENTAÇÃO DE FUNCIONAMENTO


Considerando a multiplicidade de entidades do projeto, serão listadas informações básicas sobre as mesmas abaixo:
boleto: registra as informações de geração do boleto, armazenando id e code. Todas as informações são geradas internamente no código.
buyer: registra e capta informações de comprador de serviço/produto, captando id, name, email e cpf do mesmo.
client: fornece informações de fornecedor de serviço/produto, captando seu id e name. Esta entidade deve ser mockada no banco de dados para a execução dos endpoints.
Cartão: registra e capta informações do cartão de crédito de um dono, armazenando id, holderName, cardHolder, cardNumber, expirationDate e cvv.


## RECURSOS UTILIZADOS

* Nodejs;
* MySQL;
* express;
* typescript;
* uuid;
* knex


## LINK DA DOCUMENTAÇÃO NO POSTMAN:
https://documenter.getpostman.com/view/19296981/Uyxoi43i



## PARA RODAR A APLICAÇÃO

* npm install
* npm run dev


## DESENVOLVEDOR

Anderson Felix
* Linkedin - https://www.linkedin.com/in/anderson-fl/


