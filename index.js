const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 80;

const username = "EMP001";
const password = "sliit@123"; // bad practice, use hashed / encrypted strings (or tokens) for passwords

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
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

app.get('/sliit', (req, res) => {
    res.send("Congratulations! You found easter egg 1. Code: NES-001. Report to lecturer to claim your price!");
})

app.get('/ifs', (req, res) => {
    res.send("Congratulations! You found easter egg 2. Code: NES-002. Report to lecturer to claim your price!");
})

app.get('/workwave', (req, res) => {
    res.send("Congratulations! You found easter egg 3. Code: NES-003. You derserve a raise!");
})

app.get('/hello', (req, res) => {
    res.send("Hi :)");
})

app.get('/phpmyadmin', (req, res) => {
    res.send("No you won't find that here, this is a NodeJS app :)");
})

app.get('/wp-admin', (req, res) => {
    res.send("Oh come on, wordpress doesn't even load this fast :)");
})

app.get('/wp-admin', (req, res) => {
    res.send("Oh come on, wordpress doesn't even load this fast :)");
})

app.get('/nimona', (req, res) => {
    res.send("When a knight in a futuristic medieval world is framed for a crime he didn't commit, the only one who can help him prove his innocence is Nimona -- a mischievous teen who happens to be a shapeshifting creature he's sworn to destroy.")
})

app.listen(port, () => {
    console.log("Onboarding App v1.0.0 listening on port:", port);
})