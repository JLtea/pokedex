import React from 'react';
import axios from 'axios';
import Pokemon from './PokemonList';
import './components.scss'

class Search extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {
            pokedex: [],
            filtered: [],
            order: 'Ascending'
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
            this.setState({pokedex: pokedex, filtered: pokedex});
        });
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {
        onChange: () => {}
    }
    
    handleSearchChange(event) {
        const {value} = event.target;
        let filtered = this.state.pokedex.filter(pokemon => (
            pokemon.name.includes(value.toLowerCase())
        ));
        this.setState({filtered: filtered});
    }

    handleSelectChange(event) {
        const {value} = event.target;
        let sorted = [];
        if (value === "name") {
            sorted = this.state.filtered.sort((a,b) => (
              (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
            ));
        } else if (value === "number") {
            sorted = this.state.filtered.sort((a,b) => (
                (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0
            ));
        }
        this.setState({filtered: sorted});
    }

    handleClick(event) {
        let order = ''
        if (this.state.order === 'Ascending') {
            order = 'Descending';
        } else {
            order = 'Ascending';
        }
        let reversed = this.state.filtered.reverse();
        this.setState({order: order, filtered: reversed})
    }

    render() {
        return (
            <>
            <div className = "container">
                <input onChange = {this.handleSearchChange}/>
                <select value={this.state.value} onChange={this.handleSelectChange}>
                    <option value="number">Pokedex Number</option>
                    <option value="name">Name</option>
                </select>
                <button onClick = {this.handleClick}>{this.state.order}</button>
            </div>
            <div className = "container2">
                <ul className = "results">
                    <div className = "resCon">
                        <p>Number</p>
                        <p className = "resimg">Default</p>
                        <p className = "resimg">Shiny</p>
                        <p>Name</p>
                        <p>Type</p>
                    </div>
                    {this.state.filtered.map((pokemon) => <li><Pokemon key = {pokemon.name} id = {pokemon.id} name = {pokemon.name} callBack = {this.props.callBack}/></li>)}
                </ul>
            </div>
            </>
        );
    }

}

export default Search;