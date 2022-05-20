import { BaseError } from "./BaseError";

export class ErrorComplet extends BaseError {
    constructor(){
        super("Complete todos os campos")
    }
}  