import app from "./app"
import createUsers from "./endpoints/createUsers"
import deleteUsers from "./endpoints/deleteUsers"
import getAllUsers from "./endpoints/getAllUsers"



app.get('/users', getAllUsers),
app.put('/users', createUsers)
app.delete('/users/:id', deleteUsers)


