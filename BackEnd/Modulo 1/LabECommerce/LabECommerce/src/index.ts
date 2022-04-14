import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import createUser from './endpoints/createUser'
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"


app.get('/character', getAllCharacters),
app.put('/character', createCharacter)
app.delete('/character/:id', deleteCharacter)


app.post('/users/signup', createUser)