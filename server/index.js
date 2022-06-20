const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getCookies, createCookie, deleteCookie } = require('./controller')

//Endpoints-------------------------------------

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/cookies", getCookies);

app.post('/api/cookies', createCookie);

app.delete('/api/cookies/:id', deleteCookie);

//----------------------------------------------

app.listen(4000, () => console.log("Chillin on 4000"));
