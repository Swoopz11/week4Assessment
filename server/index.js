const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getCookies } = require('./controller')

//Endpoints-------------------------------------

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/cookies", getCookies);

// app.get('/api/cookie', createCookie);

// app.get('/api/cookie', updateCookie);

// app.get('/api/cookie', deleteCookie);

//----------------------------------------------

app.listen(4000, () => console.log("Server running on 4000"));
