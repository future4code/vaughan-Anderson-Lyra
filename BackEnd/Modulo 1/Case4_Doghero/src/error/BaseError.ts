export class BaseError extends Error {
    constructor( message: string, public code: number) {
        super(message)
    }
  }  

export class InputError extends BaseError{
    constructor(message: string){
        super(message, 417)
    }
}

export class NotFoundError extends BaseError{
    constructor(message: string){
        super(message, 404)
    }
}

export class UnauthorizedError extends BaseError{
    constructor(message: string) {
      super(message, 403);
    }
  }