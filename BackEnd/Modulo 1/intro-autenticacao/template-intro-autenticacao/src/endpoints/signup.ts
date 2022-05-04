import { Request, Response } from 'express';
import connection from '../connection';
import { generateId } from '../services/IdGenerator';
import { generateToken } from '../services/generateToken';
import { user } from '../types';

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Preencha os campos 'password' e 'email'");
    }

    if (email.indexOf('@') === -1) {
      res.statusCode = 422;
      throw new Error('Email em formato inválido');
    }

    if (password.length < 6) {
      res.statusCode = 411;
      throw new Error('Senha deve conter mais de 6 caracteres');
    }

    const [user] = await connection('User').where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error('Email já cadastrado');
    }

    const id = generateId();

    const token = generateToken({
      id,
    });

    const newUser: user = { id, email, password };

    await connection('User').insert(newUser);

    res.status(201).send(`Token criado  ${token}`);
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: 'Internal server error' });
    } else {
      res.send({ message: error.message });
    }
  }
} 

    