import * as bcrypt from 'bcryptjs';

export class HashGenerator {
    public hash = async (plainText: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_ROUNDS)
        const salt = await bcrypt.genSalt(rounds);
        
        return bcrypt.hash(plainText, salt);
    }

    public compareHash = async (plainText: string, hash: string): Promise<boolean> => {
        return bcrypt.compare(plainText, hash);
    }
}