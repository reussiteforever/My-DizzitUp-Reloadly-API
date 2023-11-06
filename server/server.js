const express = require(`express`); //import express to set up the backend
const app = express(); //create our app

app.get("/api", (req, resp) => {//setup a route for the API
    resp.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})//send a JSON array if users. This is basically our backend API
})

//basicaly I gonna fetch the "users" array and display every single user

app.listen(5000, () => { console.log("Server started on port 5000") }) //this start up or backend


