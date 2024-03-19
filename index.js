import express from 'express';

const app = express();

//Definir puerto
const port = process.env.PORT || 4000;

app.get('/',(req, res) =>{ //req - lo que enviamos ; res la que express nos responde
    res.render(login);
});

app.get('/tickets',(req, res) =>{ //req - lo que enviamos ; res la que express nos responde
    res.render(tickets);
});

app.listen(port, () => {
    console.log('El sevidor esta funcionando por el puerto ${port}')
})