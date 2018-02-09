import React, { Component } from 'react';
import axios from 'axios'
import './Body.css'
import InputField from './InputField'

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team1: "",
            team2: "",
            gameParams: "",

        }
        this.getTeam1 = this.getTeam1.bind(this)
    }


    componentDidMount() {

        axios.get(`/api/getTeam1`)
            .then((res) => this.setState({ team1: res.data }))
    }


    getApi() {
        var num = 4

        axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`)
            .then((res) => console.log(res.data.stats[4].base_stat))
    }
    getTeam1() {
        axios.get(`/api/getTeam1`)
            .then((res) => this.setState({ team1: res.data}))


    }
    render() {
        console.log(this.state);
        

        return (
            <div className="mainBody">
                {/* <button onClick={this.getApi}>get API</button> */}
                <div className="topSection">
                    <div className="leftSection">
                        <span className="score"></span>
                        <p>{this.state.team1}</p>
                        <div>
                            <button onClick={this.getTeam1}></button>
                            <input />
                            <button></button>
                        </div>
                        <span className="score"> score </span>
                    </div>
                    <div className="rightSection">
                        <span className="score">team 2</span>
                        <div>
                            <input />
                            <button></button>
                        </div>
                        <span className="score"> score </span>
    
                    </div>
                </div>
                <div className="bottomSection">
                    <span>fighter 1</span>
                    <button>vs</button>
                    <span>fighter 2</span>
                </div>
               
            </div>
        );
    }
}

export default Body;