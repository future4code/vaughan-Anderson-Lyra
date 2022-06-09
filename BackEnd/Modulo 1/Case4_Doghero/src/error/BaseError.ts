export class BaseError extends Error {
    constructor( message: string, public code: number) {
        super(message)
    }
  }  

export class InputError extends BaseError{
    constructor(message: string){
        super(message, 419)
    }
}

export class NotFoundError extends BaseError{
    constructor(message: string){
        super(message, 403)
    }
}

export class UnauthorizedError extends BaseError{
    constructor(message: string) {
      super(message, 407);
    }
  }