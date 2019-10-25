const express = require('express')
const app = express()
const port = 3000 
var clicks=0

app.get('/', (req, res) => {
	res.send('Hello World! @ '+Date.now()+" totoal-clicks="+(clicks++))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
