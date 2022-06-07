import { v4 } from "uuid";

export class IdGenerator {
    public static generate(): string {
        throw new Error("Method not implemented.");
    }

    generate(): string {
        return v4();
    }
}

