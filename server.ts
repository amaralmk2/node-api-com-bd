import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const app = express();
app.use(express.json());

const users = [];

app.post('/usuarios', async (req,res) =>{
    
   await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }

    })
    
    res.status(201).json(req.body);
});

app.get('/usuarios', async (req, res) => {

    let users = [];

    if(req.query){
        users = await prisma.user.findMany({
            where:{
                email: req.query.email,
                name: req.query.name,
                age: req.query.age,

            }
        })
    }else{

         users = await prisma.user.findMany();
    }
    

    res.status(201).json(users);
})

app.put('/usuarios/:id', async (req,res) =>{

    await prisma.user.update({
        where:{
            id: req.params.id
        },
        data:{
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    res.status(201).json(req.body);

})

app.delete('/usuarios/:id', async (req,res) =>{
    
    await prisma.user.delete({
        where:{
            id: req.params.id
        },

    })
    res.status(201).json({message: "Usuario excluido com sucesso!"});
});
    


app.listen(3000)