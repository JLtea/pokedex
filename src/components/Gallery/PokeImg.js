import React from 'react';

class PokeImg extends React.Component {
    render() {
        const {pokemon, id} = this.props;
        return (
            <div>
                <div className = "pokemon_sprite">
                    <img src = {`/public/sprites/${id}.png`} />
                </div>
                <div className = "pokemon_name"> {pokemon.name}</div>
            </div>
        );
    }
}

export default PokeImg;