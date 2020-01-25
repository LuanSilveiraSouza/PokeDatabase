const { Router } = require ('express');
const PokemonController = require ('./controllers/PokemonController.js')
const routes = Router();

routes.post('/pokemon', PokemonController.add);
routes.get('/pokemon', PokemonController.list);
routes.get('/pokemon/search', PokemonController.listById);
routes.put('/pokemon/update/moves', PokemonController.updateMoves);
routes.put('/pokemon/update/ability', PokemonController.updateAbility);
routes.put('/pokemon/update/item', PokemonController.updateItem);
routes.delete('/pokemon', PokemonController.delete);

module.exports = routes;