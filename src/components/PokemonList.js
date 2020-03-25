import React from 'react';
import axios from 'axios';
import './components.scss';
import './types.scss';
class Pokemon extends React.Component {
    constructor(props) {
        super(props);
		var pokeurl = "https://pokeapi.co/api/v2/pokemon/" + this.props.id;
        this.state = {
            id: this.props.id,
            name: this.props.name,
            types: [],
            spriteUrl: '',
            shinyUrl: ''
        }

        axios.get(pokeurl)
            .then(response => {
                const types = [];
                let spriteUrl = '';
                let shinyUrl = '';
                response.data.types.forEach(element => {
                    types.push(element.type.name);
                })
                spriteUrl = response.data.sprites.front_default;
                shinyUrl = response.data.sprites.front_shiny;
                this.setState({types: types, spriteUrl: spriteUrl, shinyUrl: shinyUrl});
            });
        
    }

    render() {
        const types = [];

		this.state.types.forEach(function(element) {
            types.push(
                <><span className = {element}>{element}</span>&nbsp;</>	
            );
		});
        return(
            <div className = "listItem" onClick = {() => this.props.callBack(this.state.id)}>
                <p>No. {this.state.id}</p>
                <img className = "listSprite" alt = "img not available" src = {this.state.spriteUrl}/>
                <img className = "sprite" alt = "img not available" src = {this.state.shinyUrl}/>
                <p className = "listName">{this.state.name.substr(0,1).toUpperCase() + this.state.name.substr(1,this.state.name.length)}</p>
                <p className = "listType">{types}</p>
            </div>
        );
    }
}

export default Pokemon;