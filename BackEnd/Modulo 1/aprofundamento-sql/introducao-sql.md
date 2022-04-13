### EXERCICIOS

### 1.

a) Será removido a coluna de "salary".

b) Será feito uma alteração no nome da coluna "gender" para "sex", colocando uma condição de seis caracteres para preenchimento nesta coluna.

c) Altera a coluna de nome "gender" para "gender" com no maximo 255 caracteres.


d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### 2.

a) 
UPDATE Actor
SET 
name = "Moacyr Franco" ,
birth_date = "1950-01-01"
WHERE id = "003";

b)
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

c) 
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

d) Deu Status de bem sucedido, porem não efetuou o novo "Id" na tabela e nem seus dados.

### 3)

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) 
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;

### 4)

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "male" ;

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;
