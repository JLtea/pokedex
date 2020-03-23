import React from 'react';
import axios from 'axios';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        var image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.props.id + ".png";
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
        return(
            <div onClick = {() => this.props.callBack(this.state.id)}>
                {this.state.name}
                <img src = {this.state.spriteUrl}/>
                <p>{this.state.types}</p>
            </div>
        );
    }
}

export default Pokemon;