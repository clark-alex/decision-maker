const express = require('express')
    , bodyParser = require('body-parser')
    , app = express()
    , ctrl = require('./controller')
    , cors = require('cors')
    , port = 3030
app.use(bodyParser.json())
app.use(cors())
app.use( express.static( __dirname + '/../public/build' ) );


let team1 = 'no-team';
let team2 = 'no-team';
let gameParams = [];

app.post(`/api/addTeam1`, (req, res) => {
    console.log(req.body);
    team1= req.body.team1
    res.status(200).send(team1)

})
app.post(`/api/addTeam2`, (req, res) => {
    console.log(req.body);
    team2=req.body.team2
    res.status(200).send(team2)

})
app.post(`/api/addGameParams`, (req, res) => {
    console.log(req.body);
    team2(req.body)
    res.status(200).send(gameParams)

})
app.post('/api/addPower1', (req, res) => {
    console.log(req.body);
    team2(req.body)
    res.status(200).send(gameParams)
})
app.get('/api/getTeam1', (req, res) => { 
    console.log("1234");
    console.log('endpoint', team1)
    res.status(200).send(team1)
})
app.get('/api/getTeam2', (req, res) => { 
    console.log("5667");
    console.log('endpoint', team2)
    res.status(200).send(team2)
})
app.put('/api/put', ( req, res ) => {
    console.log("put...")
    team1=req.body;
    res.status(200).send( team1 );
})
app.put('/api/put2', ( req, res ) => {
    console.log("put numba 2")
    team2=req.body;
    res.status(200).send( team2 );
})
app.delete('/api/delete', (req,res) => {
    team1="";
    res.status(200).send(team1)
})
app.delete('/api/delete2', (req,res) => {
    team1="";
    res.status(200).send(team2)
})







app.listen(port, () => console.log(`server is listening on port: ${port}`));
