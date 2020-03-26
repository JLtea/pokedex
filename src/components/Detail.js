import React from 'react';
import axios from 'axios';
import './types.scss';
import './components.scss';
class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.id,
            name: '',
            sprites: [],
            types: [],
            abilities: [],
            height: 0,
            weight: 0
        };
        var pokeurl = "https://pokeapi.co/api/v2/pokemon/" + this.state.id;
        axios.get(pokeurl)
            .then(response => {
                let name = response.data.name;
                name = name.substr(0,1).toUpperCase() + name.substr(1,name.length);
                const sprites = [];
                const types = [];
                const abilities = [];
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
                this.setState({
                    name: name,
                    sprites: sprites,
                    types: types,
                    abilities: abilities,
                    height: height,
                    weight: weight
                })
            });
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value) {
        let id = parseInt(this.state.id) + value;
        var pokeurl = "https://pokeapi.co/api/v2/pokemon/" + id;
        axios.get(pokeurl)
            .then(response => {
                let name = response.data.name;
                name = name.substr(0,1).toUpperCase() + name.substr(1,name.length);
                const sprites = [];
                const types = [];
                const abilities = [];
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
                this.setState({
                    id: id,
                    name: name,
                    sprites: sprites,
                    types: types,
                    abilities: abilities,
                    height: height,
                    weight: weight
                })
            });
    }

    render() {
        const types = [];

		this.state.types.forEach(function(element) {
            types.push(
                <><span className = {element}>{element}</span>&nbsp;</>	
            );
        });
        
        const abilities = [];

		this.state.abilities.forEach(function(element) {
            abilities.push(
                <><span className = "abilities">{element}</span>&nbsp;</>	
            );
        });
        return (
            <div className = "detContainer">
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                <p className="nav" onClick = {() => this.handleClick(-1)}>
                    PREV<i class="material-icons">chevron_left</i>
                </p>
            <div className ="detContainer2">
                <img alt = "sprite not available" src = {this.state.sprites[0]}/>
                <div className = "details">
                    <p>No. {this.state.id}  {this.state.name}</p>
                    <p>Height: {this.state.height}</p>
                    <p>Weight: {this.state.weight}</p>
                    <p>Type {types}</p>
                    <p>Abilities {abilities}</p>
                </div>
                
            </div>
                <p className = "nav" onClick = {() => this.handleClick(1)}>
                    <i class="material-icons">chevron_right</i>NEXT
                </p>
            </div>
        );
    }
}

export default Detail;