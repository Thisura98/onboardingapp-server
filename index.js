const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { readFile } = require('fs/promises');
const app = express();
const port = 80;

const username = "EMP001";
const password = "sliit@123"; // bad practice, use hashed / encrypted strings (or tokens) for passwords

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Onboarding App Server - v1.0.0");    
});

app.post('/login', (req, res) => {
    const body = req.body;
    if (body['username'] == username && body['password'] == password){
        res.json({
            "success": true,
        });
    }
    else{
        res.json({
            "success": false,
        });
    }
});

app.get('/tasks', (req, res) => {
    const filePath = path.join(__dirname, 'tasks.json');
    readFile(filePath)
    .then(data => {
        const obj = {
            "success": true,
            "tasks": JSON.parse(data)['tasks']
        }
        res.json(obj);
    })
    .catch(err => {
        console.log("/tasks error:", err);
        res.json({
            "success": false,
            "message": "Error returning tasks"
        });
    })
})

app.listen(port, () => {
    console.log("Onboarding App v1.0.0 listening on port 80");
})