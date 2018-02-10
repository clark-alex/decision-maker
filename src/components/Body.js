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
        console.log(this.state);


        return (
            <div className="mainBody">
                {/* <button onClick={this.getApi}>get API</button> */}
                <div className="topSection">

                    {/* LEFT SECTION  */}
                    <div className="leftSection">
                        <p>{this.state.team1}</p>
                        <div>
                            <button onClick={this.getTeam1}>Display Name</button>
                            <button onClick={this.numberPicker}>Get your Pokemon!</button>
                            <p className='pokemon' >{this.state.pokemon1}</p>
                        </div>
                    </div>
                    {/* END OF LEFT */}




                    {/* RIGHT SECTION  */}
                    <div className="rightSection">
                        <p>{this.state.team2}</p>
                        <div>
                            <button onClick={this.getTeam2} >Display Name</button>
                            <button onClick={this.numberPicker2}>Get your Pokemon!</button>
                            <p className='pokemon' >{this.state.pokemon2}</p>
                        </div>

                    </div>
                </div>
                {/* END OF RIGHT */}



                {/* BOTTOM SECTION  */}
                <div className="bottomSection">
                    <span>fighter 1</span>
                    <button>vs</button>
                    <span>fighter 2</span>
                </div>
                {/* END OF BOTTOM */}
            </div>
        );
    }
}

export default Body;