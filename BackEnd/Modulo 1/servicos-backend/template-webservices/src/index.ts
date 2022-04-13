import app from "./app"
import createUser from './endpoints/createUser'
import dotenv from 'dotenv'


dotenv.config()

app.post('/users/signup', createUser)