const express = require('express')
const app = express()
const port = 3003

//Middleware log
app.use((req, res, next) =>{
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    next();
});


//Exemplo - Padrão para utilização de rotas dinâmicas
app.get('/posts/:id', (req, res) => {
    console.log(req.params);
    res.send("Este é o post de ID: " + req.params.id);
});


app.get('/', (req, res) => {
  
    //Exemplo - Utilização parâmetros via querystring
    console.log("Parâmetro via querystring:", req.query.name);
    res.status(200).send('Hello World!')
    
    //Exemplo - Retorno Sucesso
    //--Composição de retornos; padrão Builder
    //res.status(200).json();   
})

app.post('/postsample', (req, res) => {
    //Exemplo - sucesso
    //res.status(200).send('Post response!')

    //Exemplo - bug
    res.status(500).send("Error");

  })

app.get("/sum", (request, response) =>{
    const x = request.query.x || 0;
    const y = request.query.y || 0;
    const result = parseFloat(x) + parseFloat(y);

    response.send("A soma é: " + result);

});

app.get("/sumurldinamica/:x/:y", (request, response) =>{
    const x = request.params.x || 0;
    const y = request.params.y || 0;
    const result = parseFloat(x) + parseFloat(y);

    response.send("A soma é: " + result);

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})