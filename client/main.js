const complimentBtn = document.getElementById("complimentButton")
const cookieJar = document.getElementById("cookie-jar")
const form = document.querySelector('form')


const getAllCookies = () => axios.get("")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data)
        })
};

fortuneBtn.addEventListener('click', getFortune)


