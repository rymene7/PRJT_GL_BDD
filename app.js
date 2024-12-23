const express=require('express')
const Sequelize=require('./source/db/sequelize')
const bodyParser=require('body-parser')
const favicon=require('serve-favicon')
const { Comment } = require('./source/models/comment');

const app=express()
const port=process.env.PORT || 3000


app
.use(favicon(__dirname+'/favicon.ico'))
.use(bodyParser.json())

Sequelize.initDb

app.get('/',(req,res)=>{
    res.json('Hello Heroku !')
})
//ici, nous placeons nos futurs points de terminaison
require('./source/root/findAllPokemons')(app)
require('./source/root/findPokemonByPk')(app)
require('./source/root/createPokemon')(app)
require('./source/root/updatePokemon')(app)
require('./source/root/deletePokemon')(app)
require('./source/root/login')(app)

//Gestion des erreurs
app.use(({res})=>{
    const msg="impossible de trouver la ressource demandée !, Essayez un autre URL"
    res.status(404).json({msg})
})




// Route pour obtenir tous les commentaires
app.get('/comments', async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.json(comments);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Route pour ajouter un nouveau commentaire
app.post('/comments', async (req, res) => {
    const { author, content } = req.body;

    try {
        const newComment = await Comment.create({ author, content });
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).send(err);
    }
});


app.listen(port, ()=>console.log(`Notre application Node est démarée sur:  http://localhost:${port}`))



