import React from 'react';
import PokeImg from './PokeImg.js'

class Category extends React.Component {
    render() {
        return (
            <div className = "pokemon_list">
                    {this.props.species.map((pokemon,index) => <PokeImg key = {pokemon.name} id = {index + 1} pokemon = {pokemon}/>)}
            </div>
        );
    }
}

export default Category;