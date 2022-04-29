import * as bcrypt from 'bcryptjs';


export class HashManager {
    public async hash(plainTextPassword: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_ROUNDS)
        const salt = await bcrypt.genSalt(rounds);
        return bcrypt.hash(plainTextPassword, salt);
    }

    public async compare(plainTextPassword: string, hash: string): Promise<boolean> {
        return bcrypt.compare(plainTextPassword, hash);
    }
}
