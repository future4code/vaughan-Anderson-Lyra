export type user = {
   id: string
   role: string
   email: string
   password: string
   name: string
   nickname: string
}

export enum USER_ROLES{
   GUEST = "GUEST",
   ADMIN = "ADMIN"
}

export type authenticationData = {
   id: string
   role: string
   
}