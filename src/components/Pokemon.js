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
            spriteUrl: ''
        }

        axios.get(pokeurl)
            .then(response => {
                const types = [];
                let spriteUrl = '';
                response.data.types.forEach(element => {
                    types.push(element.type.name);
                })
                spriteUrl = response.data.sprites.front_default;
                this.setState({types: types, spriteUrl: spriteUrl});
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
            <div className = "item" onClick = {() => this.props.callBack(this.state.id)}>
                <img className = "sprite" alt = "img not available" src = {this.state.spriteUrl}/>
                <p className = "pokename">{this.state.name.substr(0,1).toUpperCase() + this.state.name.substr(1,this.state.name.length)}</p>
                <p className = "type">{types}</p>
            </div>
        );
    }
}

export default Pokemon;