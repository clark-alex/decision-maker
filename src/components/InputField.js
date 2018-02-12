import React, { Component } from 'react';
import axios from 'axios'
import Body from './Body'
import './InputField.css'


class InputField extends Component {
    constructor() {
        super();
        this.state = {
            inptTxt: "",
            inptTxt2: "",
            team1: '',
            team2: "",
            gameParams: [],
            pokemon1: '',
            pokemon2: '',
            editting: false,
            text: ""

        }
        this.teamNamer1 = this.teamNamer1.bind(this)
        this.handleInput1 = this.handleInput1.bind(this)
        this.handleInput2 = this.handleInput2.bind(this)
        this.handleInput3 = this.handleInput3.bind(this)
        this.numberPicker = this.numberPicker.bind(this)
        this.numberPicker2 = this.numberPicker2.bind(this)
        this.edit = this.edit.bind(this)
        this.editMessage = this.editMessage.bind(this)

    }
    componentDidMount() {

        axios.get(`/api/getTeam1`)
            .then((res) => this.setState({ team1: res.data }))
        axios.get(`/api/getTeam2`)
            .then((res) => this.setState({ team2: res.data }))
    }

    componentWillReceiveProps(newProps) {
        console.log('inputprops', newProps)
    }

    handleInput1(e) {
        var team1 = e.target.value
        this.setState({ inptTxt: team1 })

    }
    handleInput2(e) {
        var team2 = e.target.value
        this.setState({ inptTxt: team2 })

    }
    handleInput3(e) {
        let text = e.target.value
        this.setState({ text: text })

    }
    teamNamer1() {
        let team = this.state.inptTxt
        console.log(team);
        console.log('props', this.props.team)
        axios.post('/api/addTeam1', { team1: team })
            .then(res => {
                console.log(res.data)
                this.setState({ team1: res.data })
            })

    }
    teamNamer2() {
        let team = this.state.inptTxt
        console.log(team);
        axios.post('/api/addTeam2', { team2: team })
            .then(res => {
                console.log(res.data)
                this.setState({ team2: res.data.team2 })
                // why do we use .team2 here?
            })

    }
    numberPicker() {
        let randomNum = Math.round(Math.random() * (1 + 150) + 1)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
            .then((res) => this.setState({ pokemon1: res.data.name }))
        console.log(this.state.pokemon1);



    }
    numberPicker2() {
        let randomNum2 = Math.round(Math.random() * (1 + 150) + 1)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum2}/`)
            .then((res) => this.setState({ pokemon2: res.data.name }))
        console.log(this.state.pokemon2);
    }


    // paramSetter() {
    //     let team = this.state.gameParams
    //     axios.post('http://localhost:3030/api/addGameParams', { team2: team })
    //         .then(res => console.log(res.data)
    //         )
    // }
    editMessage(text) {
        console.log('/api/addTeam1', text);
        axios.put('/api/addTeam1' + { text }).then(response => {
            this.setState({ team1: response.data });
        });
    }
    edit() {
        const { text, editMessage } = this.state;
            this.editMessage(text);
            this.setState({ editting: false });

    }





    render() {
        console.log('inputstate', this.state)
        const { text, editting } = this.state
        return (
            <div>
                <div className="inputField">
                    <h1>Team 1</h1>
                    <div>
                        <input onChange={(e) => this.handleInput1(e)} />
                        <button onClick={() => this.teamNamer1()}>ADD</button>
                    </div>
                    <h1>Team 2</h1>
                    <div>
                        <input onChange={(e) => this.handleInput2(e)} />
                        <button onClick={() => this.teamNamer2()}>ADD</button>

                    </div>
                    <section className="bottom_if">
                        <h1> Game parameters</h1>
                        <div >
                            <input onChange={(e) => this.handleInput3(e)} />
                            <button onClick={() => this.paramSetter()}>ADD</button>

                        </div>

                    </section>

                </div>

                <section className='bodySection'>
                    <div>
                        <Body t1={this.state.team1} />
                    </div>
                    <div>
                        Best 2 of three...
                    </div>
                    <div>
                        <Body t2={this.state.team2} />
                        {
                            editting
                                ?
                                <input className="Message__input" value={this.state.text} onChange={this.handleInput3} onKeyPress={this.edit} />
                                :
                                <span className="Message__text">{text}</span>
                        }
                        <span className="Message__edit" onClick={() => this.setState({ editting: !this.state.editting, text })}> edit </span>
                    </div>


                </section>
                <section className='bodySection'>
                    <div>
                        <button onClick={this.numberPicker}>Get your Pokemon!</button>
                        <p className='pokemon' >{this.state.pokemon1}</p>
                    </div>
                    <div>
                        <button onClick={this.numberPicker2}>Get your Pokemon!</button>
                        <p className='pokemon' >{this.state.pokemon2}</p>
                    </div>

                </section>
            </div>
        );
    }
}

export default InputField;