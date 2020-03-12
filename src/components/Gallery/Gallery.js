import React from 'react';
import axios from 'axios';
import Category from './Category.js';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            species: [],
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(val) {
        axios.get("https://pokeapi.co/api/v2/type/" + this.state.type + "/")
        .then(response => {
            this.setState({
                species : response.data.pokemon
            })
        })
        .catch(error => {
            console.log(error)
        });
        this.setState({type: val});
    }

    componentDidMount() {
        axios.get("https://pokeapi.co/api/v2/type/" + this.state.type + "/")
            .then(response => {
                this.setState({
                    species : response.data.pokemon
                })
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        console.log(this.state.species);
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
                <div>
                    <Category species = {this.state.species} />
                </div>
            </div>
        );
    }
}

export default Gallery;