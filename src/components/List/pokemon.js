import React from 'react';
import axios from 'axios';
import './pokemon.scss';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: this.props.pokemon,
            stats: [],
            types: [],
            sprites: [],
        }
    }

    componentDidMount() {
        axios.get(this.state.pokemon.url)
            .then(response => {
                this.setState({
                    stats: response.data.stats,
                    sprites: response.data.sprites,
                    types: response.data.types,

                });
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        const {stats, sprites, types} = this.state;
        const {pokemon, id} = this.props;
        let name = pokemon.name;
        name = name.substr(0,1).toUpperCase() + name.substr(1,name.length);
        return (
            <div>
                <div className = "sprite">
                    <img src = {sprites.front_default} />
                </div>
                <div className = "name"> {name}</div>
                <div className = "types">
                    {
                        types.map(slots =>{
                            return (
                                <li>
                                    {slots.type.name}
                                </li>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Pokemon;