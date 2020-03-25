import React from 'react';
import axios from 'axios';
import Pokemon from './Pokemon.js';
import './components.scss';

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
                    let name = element.pokemon.name.substr(0,1).toUpperCase() + element.pokemon.name.substr(1,element.pokemon.name.length);
                    pokedex.push({
                        name:name,
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
                    <button onClick = {() => this.handleClick(1)}> Normal </button>
                    <button onClick = {() => this.handleClick(2)}> Fighting </button>
                    <button onClick = {() => this.handleClick(3)}> Flying </button>
                    <button onClick = {() => this.handleClick(4)}> Poison </button>
                    <button onClick = {() => this.handleClick(5)}> Ground </button>
                    <button onClick = {() => this.handleClick(6)}> Rock </button>
                    <button onClick = {() => this.handleClick(7)}> Bug </button>
                    <button onClick = {() => this.handleClick(8)}> Ghost </button>
                    <button onClick = {() => this.handleClick(9)}> Steel </button>
                    <button onClick = {() => this.handleClick(10)}> Fire </button>
                    <button onClick = {() => this.handleClick(11)}> Water </button>
                    <button onClick = {() => this.handleClick(12)}> Grass </button>
                    <button onClick = {() => this.handleClick(13)}> Electric </button>
                    <button onClick = {() => this.handleClick(14)}> Psychic </button>
                    <button onClick = {() => this.handleClick(15)}> Ice </button>
                    <button onClick = {() => this.handleClick(16)}> Dragon </button>
                    <button onClick = {() => this.handleClick(17)}> Dark </button>
                    <button onClick = {() => this.handleClick(18)}> Fairy </button>
                </div>
                <div className = "grid">
                    {this.state.pokedex.map((info, index) => <Pokemon key = {info.name} index = {index} id = {info.id} name = {info.name} callBack = {this.props.callBack}/>)}
                </div>
            </div>
        );
    }
}

export default Gallery;