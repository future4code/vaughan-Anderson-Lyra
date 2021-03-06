export class UserTutor{
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    setId(id: string){
        return this.id = id;
    }

    setName(name: string){
        return this.name = name;
    }

    setEmail(email: string){
        return this.email = email;
    }

    setPassword(password: string){
        return this.password = password;
    }

    

    static toTutorModel(data?: any){
        return (data && new UserTutor(
            data.id,
            data.name,
            data.email,
            data.password
        ))
    }
}


export interface TutorInputDTO{
    name: string,
    email: string,
    password: string
}

export interface TutorOutputDTO{
    name: string,
    email: string,
    password: string
}
