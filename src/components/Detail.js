import React from 'react';
import axios from 'axios';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        var pokeurl = "https://pokeapi.co/api/v2/pokemon/" + this.props.id;
        this.state = {
            id : this.props.id,
            name: '',
            sprites: [],
            types: [],
            abilities: [],
            stats: [],
            height: 0,
            weight: 0
        };
        axios.get(pokeurl)
            .then(response => {
                const name = response.data.name;
                const sprites = [];
                const types = [];
                const abilities = [];
                const stats = [];
                const height = response.data.height;
                const weight = response.data.weight;
                sprites.push(response.data.sprites.front_default);
                sprites.push(response.data.sprites.front_shiny);
                response.data.abilities.forEach(element => {
                    abilities.push(element.ability.name);
                })
                response.data.types.forEach(element => {
                    types.push(element.type.name);
                    
                })
                response.data.stats.forEach(element => {
                    stats.push(element.base_stat);
                })
                this.setState({
                    id: this.props.id,
                    name: name,
                    sprites: sprites,
                    types: types,
                    abilities: abilities,
                    stats: stats,
                    height: height,
                    weight: weight
                })
            });
    }

    render() {
        console.log(this.state.abilities)
        return (
            <div>
                {this.state.name}
                <img src = {this.state.sprites[0]}/>
                <img src = {this.state.sprites[1]}/>
                <a>Dex # {this.state.id}</a> 
                <p>Types: {this.state.types}</p>
                <p>Abilities: {this.state.abilities}</p>
                <p>Height: {this.state.height}</p>
                <p>Weight: {this.state.weight}</p>
            </div>
        );
    }
}

export default Detail;