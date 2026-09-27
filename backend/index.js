const express = require('express');
const app=express();
const PORT = 8080;

app.use(express.json());

app.get('/sh', (req,res)=>{
    res.status(200).send({
        shirt:'white',
        size:'xl'
    })
})

app.post('/sh/:id', (req,res)=>{
    const {id} =req.params;
    const {logo} = req.body;

    if(!logo){
        res.status(404).send({message:'logo is required'})
    }
    res.send({
        shirt:`ehite shirt with ${logo} and id of ${id}`
    })
})

app.listen( PORT , ()=> console.log('server is alive'))
