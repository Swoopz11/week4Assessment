const cookies = require('./db.json');

let globalID = 5

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["About time I got out of that cookie", "Run", "If you eat something & nobody sees you eat it, it has no calories", "Never leave anything unfini", "Ignore previous cookie", "You will marry a professional athlete - if competitive eating is considered a sport", "Help! I'm a prisoner at Devmountain", "I see money in your future... it's not yours though"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    getCookies: (req,res) => res.status(200).send(cookies),

    deleteCookie: (req, res) => {
        let index = cookies.findIndex(elem => elem.id === +req.params.id)
        cookies.splice(index, 1)
        res.status(200).send(cookies)
    },

    createCookie: (req,res) => {
        const {cookie, imageURL} = req.body
        let newCookie = {
            cookie,
            imageURL,
            id: globalID
        }
        cookies.push(newCookie)
        globalID++
        res.status(200).send(cookies)
    },
}