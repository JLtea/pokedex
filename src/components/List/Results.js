import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './pokemon.js';
import './Results.scss';

class Results extends React.Component {
    render() {
        return (
            <ul className = "list">
                    {this.props.species.map((pokemon,index) => <li className = "item"><Pokemon key = {pokemon.name} id = {index + 1} pokemon = {pokemon}/></li>)}
            </ul>
        );
    }
    // propTypes = {
    //     species: PropTypes.arrayOf(
    //       PropTypes.shape({
    //         name: PropTypes.string.isRequired,
    //         url: PropTypes.string.isRequired
    //       })
    //     ).isRequired
    //   };
      
    // defaultProps = {
    //     pokemon: []
    // }
}

export default Results;