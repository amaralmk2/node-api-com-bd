import express from 'express';


const app = express();
app.use(express.json());

const users = [];

app.post('/usuarios', (req: Request,res: Response) =>{
    
    users.push(req.body);

    res.send('ok, POST aqui!!');
})

app.get('/usuarios', (req: Request, res: Response) => {
    res.json(users);
})

app.listen(3000)