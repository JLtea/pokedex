import React from 'react';
import axios from 'axios';
import Pokemon from './Pokemon.js';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokedex: []
        }
        axios.get ('https://pokeapi.co/api/v2/pokemon?limit=24')
        .then(pokeurls => {
            const pokedex = [];
            pokeurls.data.results.forEach(element => {
                var id = element.url.substr(34);
                id = id.substr(id, id.length - 1);
                pokedex.push({
                    name: element.name,
                    id: id
                })
            })
            this.setState({pokedex: pokedex});
        });
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(typeN) {
        axios.get("https://pokeapi.co/api/v2/type/" + typeN + "/")
            .then(pokeurls => {
                const pokedex = [];
                pokeurls.data.pokemon.forEach(element => {
                    var id = element.pokemon.url.substr(34);
                    id = id.substr(id, id.length - 1);
                    pokedex.push({
                        name: element.pokemon.name,
                        id: id
                    })
                })
                this.setState({pokedex: pokedex});
            });   

    }



    render() {
        return (
            <div>
                <div>
                    <a onClick = {() => this.handleClick(1)}> Normal </a>
                    <a onClick = {() => this.handleClick(2)}> Fighting </a>
                    <a onClick = {() => this.handleClick(3)}> Flying </a>
                    <a onClick = {() => this.handleClick(4)}> Poison </a>
                    <a onClick = {() => this.handleClick(5)}> Ground </a>
                    <a onClick = {() => this.handleClick(6)}> Rock </a>
                    <a onClick = {() => this.handleClick(7)}> Bug </a>
                    <a onClick = {() => this.handleClick(8)}> Ghost </a>
                    <a onClick = {() => this.handleClick(9)}> Steel </a>
                    <a onClick = {() => this.handleClick(10)}> Fire </a>
                    <a onClick = {() => this.handleClick(11)}> Water </a>
                    <a onClick = {() => this.handleClick(12)}> Grass </a>
                    <a onClick = {() => this.handleClick(13)}> Electric </a>
                    <a onClick = {() => this.handleClick(14)}> Psychic </a>
                    <a onClick = {() => this.handleClick(15)}> Ice </a>
                    <a onClick = {() => this.handleClick(16)}> Dragon </a>
                    <a onClick = {() => this.handleClick(17)}> Dark </a>
                    <a onClick = {() => this.handleClick(18)}> Fairy </a>
                </div>
                <div className = "grid">
                    {this.state.pokedex.map((info) => <Pokemon key = {info.name} id = {info.id} name = {info.name} callBack = {this.props.callBack}/>)}
                </div>
            </div>
        );
    }
}

export default Gallery;