const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80;

const username = "EMP001";
const password = "sliit@123"; // bad practice, use hashed / encrypted strings (or tokens) for passwords

function sendJson(req, obj){
    req.send(JSON.stringify(obj));
}

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Onboarding App Server - v1.0.0");    
});

app.post('/login', (req, res) => {
    const body = req.body;
    if (body['username'] == username && body['password'] == password){
        sendJson(req, {
            "success": true,
        });
    }
    else{
        sendJson(req, {
            "success": false,
        });
    }
});

app.listen(port, () => {
    console.log("Onboarding App v1.0.0 listening on port 80");
})