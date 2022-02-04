import { Component } from "react";
import PropTypes from "prop-types"
import Pokemon from "./pokemon";

class Pokedex extends Component {
    render = () => {
        const {pokemons} = this.props;
        return pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
    }
}

Pokedex.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        averageWeight: PropTypes.shape({
            value: PropTypes.number.isRequired,
            measurementUnit: PropTypes.string.isRequired,
        }),
        image: PropTypes.string.isRequired,
    }))
}

export default Pokedex;