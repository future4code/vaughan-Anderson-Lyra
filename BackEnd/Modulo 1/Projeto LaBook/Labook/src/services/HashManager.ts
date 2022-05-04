import * as bcrypto from 'bcryptjs';

export class HashManager {
    hash = async (plainText: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypto.genSalt(rounds);
        return await bcrypto.hash(plainText, salt);
    }
    compare = async (plainText: string, cypherText: string): Promise<boolean> => {
        return bcrypto.compare(plainText, cypherText);
    }
}
