import React, { Component } from 'react';
import axios from 'axios'
import './InputField.css'


class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inptTxt: "",
            inptTxt2: "",
            team1: '',
            team2: "",
            gameParams: []

        }
        this.teamNamer1 = this.teamNamer1.bind(this)
        this.handleInput1 = this.handleInput1.bind(this)

    }
    // componentDidMount() {

    //     axios.get(`/api/getTeam1`)
    //         .then((res) => this.setState({ team1: res.data }))
    //     axios.get(`/api/getTeam2`)
    //         .then((res) => this.setState({ team2: res.data }))
    // }

    // componentWillReceiveProps(newProps) {
    //     console.log(newProps)
    // }

    handleInput1(e) {
        var team1 = e.target.value
        this.setState({ inptTxt: team1 })

    }
    handleInput2(e) {
        var team2 = e.target.value
        this.setState({ inptTxt2: team2 })

    }
    handleInput3(e) {
        var gameParams = e.target.value
        this.setState = ({ gameParams })

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
        let newTeam = this.state.inptTxt2
        console.log(newTeam);
        axios.post('/api/addTeam2', { team2: newTeam })
            .then(res => {
                console.log(res.data)
                this.setState({ team2: res.data })
            })

    }
 
    
    paramSetter() {
        let team = this.state.gameParams
        axios.post('http://localhost:3030/api/addGameParams', { team2: team })
            .then(res => console.log(res.data)
            )
    }



    render() {
        return (
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
        );
    }
}

export default InputField;