require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/facebook',(req,res)=>{
    res.send("Hello harsh from Mars")
})
app.get('/instagram',(req,res)=>{
    res.send('<h1>Hey harsh welcome to our cringe world</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})