import express from 'express'


const app = express()

const useres = []

app.post('/usuarios', (req,res) =>{
    console.log(req)
    res.send('ok, POST aqui!!')
})

app.get('/usuarios', (req, res) => {
    res.send("Ok!")
})

app.listen(3000)