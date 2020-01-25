const Pokemon = require ('../models/Pokemon.js');

module.exports = {
    async add (req, res) {
        const {name, pkdx, nature, gender, ability, moves, item, shiny} = req.body;
    
        const pokemon = await Pokemon.create({
            name,
            pkdx,
            nature,
            gender,
            ability,
            moves,
            item,
            shiny
        });
    
        return res.json(pokemon);
    },    

    async list (req, res) {
        const pokemons = await Pokemon.find();

        return res.json(pokemons);
    },

    async listById (req, res) {
        const { id } = req.query;

        const pokemon = await Pokemon.findById(id);

        return res.json(pokemon);
    },

    async updateMoves(req, res) {
        const { id } = req.query;
        const { moves } = req.body;

        const pokemon = await Pokemon.findByIdAndUpdate(id, {moves});

        let msg;
        if(pokemon == null) {
            msg = "O Id informado é inválido";
        } else {
            msg = "Pokemon atualizado com sucesso";
        }
        return res.json({ msg });
    },

    async updateAbility(req, res) {
        const { id } = req.query;
        const { ability } = req.body;

        const pokemon = await Pokemon.findByIdAndUpdate(id, {ability});

        let msg;
        if(pokemon == null) {
            msg = "O Id informado é inválido";
        } else {
            msg = "Pokemon atualizado com sucesso";
        }
        return res.json({ msg });
    },

    async updateItem(req, res) {
        const { id } = req.query;
        const { item } = req.body;

        const pokemon = await Pokemon.findByIdAndUpdate(id, {item});

        let msg;
        if(pokemon == null) {
            msg = "O Id informado é inválido";
        } else {
            msg = "Pokemon atualizado com sucesso";
        }
        return res.json({ msg });
    },

    async delete (req, res) {
        const { id } = req.query;

        const pokemon = await Pokemon.findByIdAndDelete(id);

        let msg;
        if(pokemon == null) {
            msg = "O Id informado é inválido";
        } else {
            msg = "Pokemon deletado com sucesso";
        }
        return res.json({ msg });
    }
};