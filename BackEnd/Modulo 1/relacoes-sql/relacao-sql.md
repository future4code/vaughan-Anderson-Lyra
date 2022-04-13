### EXERCICIOS


USE `vaughan-21712733-anderson-lyra`;
SET SQL_SAFE_UPDATES = 0;

DESCRIBE Actor;
DESCRIBE Movie;
SELECT * FROM Actor;
SELECT * FROM Movie;
SELECT * FROM Rating;
SELECT * FROM MovieCast;

### a)
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

### b);
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES
("001", "Engraçado", "7", "001"), 
("002", "Muito dramático", "6", "002"),
("003", "Empolgante", "7", "004"), 
("004", "Muito engraçado", "10", "005"
);

### c);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES
("005", "Desconhecido", "0", "035"
);

 //Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`vaughan-21712733-anderson-lyra`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`));
 //Não é possível adicionar ou atualizar uma linha: uma restrição de chave estrangeira falha;

### d);
ALTER TABLE Movie DROP COLUMN rating;

### e) Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira;
DELETE FROM Movie 
WHERE id = "004";

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

### a) Tabela que relaciona o filme ao ator;
### b);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES
( "001", "005"), 
( "002", "004"),
( "004", "003"), 
( "005", "002"),
("005", "001"
);

### d)Quando apagado o Ator, o Filme tbm saiu;
DELETE FROM MovieCast 
WHERE actor_id = "004";

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

### a)O operador OR mostra um registro se pelo menos uma das condições for verdadeira;
### b);
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;