const { response } = require('express');
const express = require('express');//importando para o projeto
const { uuid } = require('uuvidv4');

const app = express();

app.use(express.json())//serve pra ele intender que esta passando um Json

const projects = []
// console.log(app);

/** Metodos de requisição
 * GET :Buscar informações do back-end
 * post : Criar uma Informação no back-end
 * put/patch : ALterar uma informação no back-end
 * Delete : deleter informações do back-end 
 * 
 */

/**
 * Query Params: vamos usar pricipalmente para filtrar e paginação 
 * Route Params: Indentificar recursos na ho9ra de atualizar ou deletar
 * Request body: Resto do conteudo na hora de criar ou editar um recurso
 */




/**Aqui coloca as rotas res = request, response = response */
app.get('/projects', (request,response) => {     
    
    const {title, owner} = resquest.query;
    
    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1', 
        'projeto 2'
    ])

});

/**Metodo POST */
app.post('/projects', (request, response ) => {
    
     
    const {title, owner} = resquest.query;
    
    console.log(title);
    console.log(owner);

    return response.json( [
        'Projeto 1', 
        'projeto 2',
        'projeto 3'

    ])
})

app.put('/projects/:id', (request, response) => {
const params = request.params;

console.log(params);

    return response.json([
        'Ronierison',
        'Projeto 2',
        'projeto 3'
    ])
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'projeto 50',
        'Projeto 2',
        'projeto 3'
    ])
})
/**Conexão com o serviodor  */
app.listen(3333)




