import 'dotenv/config'
import express from 'express'
import { UserController } from './app/controllers/UserController'

const app = express()
app.use(express.json())

app.post('/users', new UserController().store)

app.listen('3000', () => {
    console.log('Server is running!')
})