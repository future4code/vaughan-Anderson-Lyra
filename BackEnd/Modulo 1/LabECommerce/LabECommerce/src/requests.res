GET http://localhost:3003/users/1


###

PUT http://localhost:3003/character
Content-Type: application/json

{
   "name":"Juggernaut",
   "gender":"MALE",
   "description":"O irmão do Prof X!!!!"
}

###

DELETE http://localhost:3003/character/3