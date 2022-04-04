### Introdução

USE `vaughan-21712733-anderson-lyra`; 

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);


### Exercicios 1

a) 	* VARCHAR (255) - strings de no máximo 255 caracteres, PRIMARY KEY  identificador unico.
	* VARCHAR (255) - strings de no máximo 255 caracteres, NOT NULL - é obrigatorio inserir este item.
	* DATE - representa uma data, NOT NULL -  é obrigatorio inserir este item.
	* VARCHAR (6) - strings de no máximo 6 caracteres.

b) 	SHOW DATABASES - Mostra os dados do usuario no servidor.
	SHOW TABLES - Mostra a tabela disponivel.

c) 	Exibe a tabela e seus dados.

### Exercicios 2

    a) foi inserida a atriz a tabela.
	
	b) Não foi possivel inserir, pois já existe uma pessoa com este ID - Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

	c) Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1 0,141. Ficou faltando dados para informar dados a taleba, itens (birth_date, gender).

	d) Código de erro: 1364. O campo 'nome' não tem um valor padrão. Ficou faltando dado na tabela (name).

	e) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha. Foi inserido sem estar entre aspas.

### Exercicios 3

    a) SELECT id, name from Actor WHERE gender = "female".

	b) SELECT id, salary from Actor WHERE name = "Tony Ramos".

	c) SELECT id, name, salary, birth_date from Actor WHERE gender AND "invalid". Todos os valores retornam NULL, pois não existe nunhum campo invalido.

	d) SELECT id, name, salary from Actor WHERE salary < 500000. 

	e) SELECT id, nome from Actor WHERE id = "002".  Coluna desconhecida 'nome' na 'lista de campos', campo "nome esta escrito errado. Após a correção retornou a "Gloria Pires".

### Exercicios 4	

a) SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000. Faz uma busca com nomes iniciando com a letra "A" e "J", cujos os salrios precisam ser maiores que R$ 300.000.

	b) SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

	c) SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

	d) SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

### Exercicios 5

    a) CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL

	(b) Se eu fosse você criado.
	(c) Doce de mãe criado.
	(d) Auto da Compadecida criado.

### Exercicios 6	

    a)  SELECT id, title, rating 
        from Movie 
        WHERE id = 1;

	b)  SELECT title
        from Movie 
        WHERE title = "Deus é Brasileiro";

	c)  SELECT id, title, synopsis 
        from Movie 
        WHERE rating >= "7";
      
### Exercicios 7

    a) SELECT * FROM Movie
    WHERE title LIKE "%vida%";
    
    b) SELECT * FROM Movie
    WHERE title LIKE "%Doce%" OR
      synopsis LIKE "%casados";
      
     c) SELECT * FROM Movie
    WHERE release_Date < "2022/02/06";
    
    d) SELECT * FROM Movie
    WHERE release_Date < "2022-05-04" AND 
      (title LIKE "%Doce%" OR
      synopsis LIKE "%casados%") AND rating > 7;


    




	