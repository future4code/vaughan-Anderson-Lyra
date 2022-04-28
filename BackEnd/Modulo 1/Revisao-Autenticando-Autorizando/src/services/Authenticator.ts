import * as jwt from 'jsonwebtoken';
import { USER_ROLE } from '../entities/User';

export interface AuthenticationData {
    id: string;
    role: USER_ROLE;
}

export class Authenticator {
    public generateToken(input: AuthenticationData): string {
        const token = jwt.sign(input, process.env.JWT_KEY as string , {
                expiresIn: process.env.JWT_EXPIRES_IN
            });
        return token;
    }

    public getTokenData(token: string): AuthenticationData {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as any;
        return data as AuthenticationData;
    }
}