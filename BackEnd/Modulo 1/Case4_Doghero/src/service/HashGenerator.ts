import * as bcrypt from 'bcryptjs';

export class HashGenerator {
   public async hash(text: string): Promise<string> {
       
        const rounds = 12
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(text, salt);

        return result;
    }

    public compareHash = async (text: string, hash: string): Promise<boolean> => {
        return await bcrypt.compare(text, hash);
    }
}