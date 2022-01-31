import { Component } from "react";
import PropTypes from "prop-types";

class Pokemon extends Component {
    render = () => {
        const {name: pokeName, type, averageWeight: {value, measurementUnit}, image} = this.props.pokemon
        return <div className="Pokemon">
            <span>{pokeName}</span>
            <span>{type}</span>
            <span>Average weight: {value}{measurementUnit}</span>
            <img src={image} alt={pokeName} />
        </div>
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        averageWeight: PropTypes.shape({
            value: PropTypes.number.isRequired,
            measurementUnit: PropTypes.string.isRequired,
        }),
        image: PropTypes.string.isRequired,
    })
}

export default Pokemon;