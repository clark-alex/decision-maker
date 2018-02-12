import React, { Component } from 'react';
import axios from 'axios'
import './Body.css'
import InputField from './InputField'
import { log } from 'util';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team1: "",
            team2: "",
            gameParams: "",
            numInput1: "",
            num1: 0,
            num2: 0,
            pokemon1:'',
            pokemon2:'',


        }
        this.getTeam1 = this.getTeam1.bind(this)
        this.getTeam2 = this.getTeam2.bind(this)
        this.numberPicker = this.numberPicker.bind(this)
        this.numberPicker2 = this. numberPicker2.bind(this)
        
    }


    // componentDidMount() {

    //     axios.get(`/api/getTeam1`)
    //         .then((res) => this.setState({ team1: res.data }))
    //     axios.get(`/api/getTeam2`)
    //         .then((res) => this.setState({ team2: res.data }))
    // }
     /// THIS ONE IS IMPORTANT -- Make sure you have this
     componentWillReceiveProps(newProps) {
        console.log('newprops', newProps)
        this.setState({ team1: newProps, team2: newProps})
    }


    getApi() {
        var num = 4

        axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`)
            .then((res) => console.log(res.data.stats[4].base_stat))
    }
    getTeam1() {
        axios.get(`/api/getTeam1`)
            .then((res) => this.setState({ team1: res.data }))


    }
    getTeam2() {
        axios.get(`/api/getTeam2`)
            .then((res) => this.setState({ team2: res.data }))


    }
    numberPicker(){
        let randomNum = Math.round(Math.random()*(1+150)+1)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
        .then((res) => this.setState({pokemon1:res.data.name}))
        console.log(this.state.pokemon1);
        


    }
    numberPicker2(){
        let randomNum2 = Math.round(Math.random()*(1+150)+1)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum2}/`)
        .then((res) => this.setState({pokemon2:res.data.name}))
        console.log(this.state.pokemon2);
        
        // let randomNum2 = Math.round(Math.random()*(1+151)+1)
        // this.setState({num2:randomNum2});
        // console.log(this.state.num2)
    }
    render() {
        console.log('bodystate', this.state);
        return (
            <div className="mainBody">
               
                    {/* This one is important as well */}
                        <p>{this.state.team1.t1}
                       {this.state.team2.t2}
                       </p>
               
            </div>
        );
    }
}

export default Body;