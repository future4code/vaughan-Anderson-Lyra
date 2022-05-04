import * as jwt from 'jsonwebtoken';


export class Authenticator {
    generateToken = (
        payload: authenticationData
    ): string => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: '1h' }
        );
    }

    getTokenData = (
        token: string
    ): authenticationData => {
        return jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as authenticationData;
    }
}
