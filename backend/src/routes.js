const express = require('express')

const routes = express.Router()
const  users = [{
    id: 1,
    name:'João',
    email: 'vitorjoao05siqueira@gmail.com',
    password: '@Jonnks123'
}]

routes.post('/login', (req, res) => {
    const{ email, passoword} = req.body

   const user = users.find(user => user.email === email && user.passoword === passoword)
   if (user){

   return res.status(200).json(user)
   }
    
    return res.status(401).json({ message: 'credenciais invalidas'})
} )

module.exports = routes