const express = require('express')
const app = express()
const pokemons = require('./pokedex-20202711.json')



app.get('/pokemon', (req, res) => {
    res.json(pokemons)
})

app.get('/pokemon/:id', (req, res) => {
   
    const pokemon = pokemons.find(c => c.id == parseInt(req.params.id))
    if(!pokemon) return res.status(404).send('The pokemon with the given id was not found')
    
    res.send(pokemon)
})

app.delete('/items/:id', (req, res) => {
    
    const pokemon = pokemons.find(c => c.id == parseInt(req.params.id))
    if(!pokemon) return res.status(404).send('The pokemon with the given id was not found')
    
    const index = pokemons.indexOf(pokemon)
    pokemons.splice(index, 1)
    
    res.send(pokemon)
    
})

const port = process.env.PORT || 4242
app.listen(port, () => console.log(`Server is listenig on port ${port}`))