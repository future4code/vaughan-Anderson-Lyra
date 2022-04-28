
export enum USER_ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {
  
    constructor(
        private id: string,
        private name: string, 
        private email: string,
        private password: string,
        private role: USER_ROLE
    ) {}

    getId(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getEmail(): string {
        return this.email;
    }
    getPassword(): string {
        return this.password;
    }
    getRole(): USER_ROLE {
        return this.role;
    }

        static toUserModel(user: any): User {
            return new User(
                user.id,
                user.name,
                user.email,
                user.password,
                user.role
            )
        }

    }