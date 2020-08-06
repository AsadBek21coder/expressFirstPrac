const express = require('express')
const app = express()
const PORT = 8080

app.get( '/', (req,res) => {
	res.send('Hello world')
	console.log('sent "Hello world"')
})

app.get('/api', (req,res) => {
	res.send( [1,2,3] )
	console.log('Array recieved')
})


app.listen( PORT, ()=> console.log(`running at ${PORT}`) )