const express = require('express')
const app = express()
const PORT = 8080
const cors = require('cors')
app.use(cors())

app.get( '/', (req,res) => {
	res.send('Hello world')
	console.log('sent "Hello world"')
})

app.get('/api', (req,res) => {
	res.send( ['Asadbek', 'Egaambergenov',1,2,3,25   ,251 ,55 ,4654,6,54654,6546,546546,8546] )
	console.log('Array recieved')
})


app.listen( PORT, ()=> console.log(`running at ${PORT}`) )