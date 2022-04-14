export type user = {
   id: string
   name: string
   email: string
   password: string
}

export type movie2 = {
   id: number,
   title: string,
   year: number
}

export enum GENDER {
   MALE = "MALE",
   FAMALE = "FAMALE",
   OTHER = "OTHER"
}

export type character = {
   id: number,
   name: string,
   gender: GENDER,
   description?:string
}