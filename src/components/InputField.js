import React, { Component } from 'react';
import axios from 'axios'
import Body from './Body'
import './InputField.css'
import Title from './Title'



class InputField extends Component {
    constructor() {
        super();
        this.state = {
            inptTxt: "",
            inptTxt2: "",
            team1: '',
            team2: "",
            gameParams: '',
            pokemon1: '',
            power1: 0,
            power2: 0,
            pokemon2: '',
            editting: false,
            text2: "",
            text: "",
            edit1: "",
            winner: "",
            editting: false,
            salita: "",


        }
        this.teamNamer1 = this.teamNamer1.bind(this)
        this.handleInput1 = this.handleInput1.bind(this)
        this.handleInput2 = this.handleInput2.bind(this)
        this.handleInput3 = this.handleInput3.bind(this)
        this.handleInput4 = this.handleInput4.bind(this)
        this.numberPicker = this.numberPicker.bind(this)
        this.editMessage = this.editMessage.bind(this)
        this.deleteMessage = this.deleteMessage.bind(this)
        this.deleteMessage2 = this.deleteMessage2.bind(this)
        this.editMessage2 = this.editMessage2.bind(this)
        this.paramSetter=this.paramSetter.bind(this)
       


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
        this.setState({ inptTxt2: team2 })

    }
    handleInput3(e) {
        this.setState({ text: e.target.value })

    }
    handleInput4(e) {
        this.setState({ text2: e.target.value })

    }
    handler(e){
        this.setState({salita:e.target.value})
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
        let team2 = this.state.inptTxt2
        console.log(team2);
        axios.post('/api/addTeam2', { team2: team2 })
            .then(res => {
                console.log(res.data)
                this.setState({ team2: res.data })
            })

    }
    numberPicker() {
        let randomNum = Math.round(Math.random() * (1 + 150) + 1)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
            .then((res) => this.setState({ pokemon1: res.data.name }))
        console.log(this.state.pokemon1);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
            .then((res) => this.setState({ power1: res.data.stats[4].base_stat }))
        console.log(this.state.power1);
        let randomNum2 = Math.round(Math.random() * (1 + 150) + 1)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum2}/`)
            .then((res) => this.setState({ pokemon2: res.data.name }))
        console.log(this.state.pokemon2);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum2}/`)
            .then((res) => this.setState({ power2: res.data.stats[4].base_stat }))
        console.log(this.state.power2);


    }


    paramSetter() {
        this.setState({gameParams:this.state.salita})
    }

    editMessage() {
        let text = this.state.text
        axios.put('http://localhost:3030/api/put', { text }).then(response => {
            this.setState({ team1: response.data.text });
            console.log("put request 21", '/api/put', this.text);
        });
    }
    editMessage2() {
        let text2 = this.state.text2
        axios.put('http://localhost:3030/api/put2', { text2 }).then(response => {
            this.setState({ team2: response.data.text2 });
            console.log("put req", '/api/put', this.text2);
        });
    }
    deleteMessage() {
        axios.delete('http://localhost:3030/api/delete').then(response => {
            this.setState({ team1: response.data })
        })
    }
    deleteMessage2() {
        axios.delete('/api/delete').then(response => {
            this.setState({ team2: response.data })
        })
    }






    render() {
        console.log('inputstate', this.state)
        const { text, editting } = this.state
        return (
            <div className="theMain">
                <div className="title">
                    <Title className='title' />
                </div>
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
                            <input onChange={(e) => this.handler(e)} />
                            <button onClick={this.paramSetter}>ADD</button>

                        </div>

                    </section>

                </div>

                <section className='bodySection'>
                    <div>
                        <Body t1={this.state.team1} />

                        <div className="Message__container">

                            {
                                editting
                                    ?
                                    <input className="Message__input" value={this.state.text} onChange={this.handleInput3} onKeyPress={this.editMessage} />
                                    :
                                    <span className="Message__text">{''}</span>
                            }
                            <span className="Message__edit" onClick={() => this.setState({ editting: !this.state.editting, text })}> Edit </span>
                            <span className="Message__delete" onClick={this.deleteMessage}> Delete </span>
                        </div>
                    </div>
                    <div className="params">
                        {this.state.gameParams}
                    </div>
                    <div>
                        <Body t2={this.state.team2} />
                        


                        <div className="Message__container">

                            {
                                editting
                                    ?
                                    <input className="Message__input" value={this.state.text2} onChange={this.handleInput4} onKeyPress={this.editMessage2} />
                                    :
                                    <span className="Message__text">{''}</span>
                            }
                            <span className="Message__edit" onClick={() => this.setState({ editting: !this.state.editting, text })}> Edit </span>
                            <span className="Message__delete" onClick={this.deleteMessage2}> Delete </span>
                        </div>

                    </div>


                </section>
                <section className='bodySection'>
                    <div>
                        {/* <button onClick={this.numberPicker}>Get your Pokemon!</button> */}
                        <p className='pokemon1' >{this.state.pokemon1}-{this.state.power1}</p>
                    </div>
                    <div>
                        {/* <button onClick={this.numberPicker2}>Get your Pokemon!</button> */}
                        <p className='pokemon2' >{this.state.pokemon2}-{this.state.power2}</p>
                    </div>


                </section>
                <div className="bottom">
                    <button className="fightButton" onClick={this.numberPicker}>FIGHT</button>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default InputField;