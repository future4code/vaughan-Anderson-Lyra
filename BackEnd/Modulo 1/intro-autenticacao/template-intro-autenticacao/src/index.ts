import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import signup from "./endpoints/signup"





//app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)

app.post('/user/signup', signup)
