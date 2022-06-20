const cookieJar = document.getElementById("cookie-jar")
const form = document.querySelector('form')

const baseURL = 'http://localhost:4000/api/cookies/'

const cookiesCallback = ({ data: cookies }) => displayCookies(cookies)
const errCallback = err => console.log(err.response.data)

const getAllCookies = () => axios.get(baseURL).then(cookiesCallback).catch(errCallback)
const createCookie = body => axios.post(baseURL, body).then(cookiesCallback).catch(errCallback)
const deleteCookie = id => axios.delete(`${baseURL}/${id}`).then(cookiesCallback).catch(errCallback)
const updateCookie = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(cookiesCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let cookie = document.getElementById('cookie')
    let imageURL = document.getElementById('img')

    let bodyObj = {
        cookie: cookie.value,
        imageURL: imageURL.value
    }

    createCookie(bodyObj)

    cookie.value = ''
    imageURL.value = ''
}

function createCookieCard(flavor) {
    const cookieCard = document.createElement('div')
    cookieCard.classList.add('cookie-card')

    cookieCard.innerHTML = `<img alt='cookie cover' src=${flavor.imageURL} class="cookie-cover"/>
    <p class="cookie-flavor">${flavor.cookie}</p>
    <button onclick="deleteCookie(${flavor.id})">delete</button>`

    cookieJar.appendChild(cookieCard)
}


function displayCookies(arr) {
    cookieJar.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createCookieCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllCookies()

const complimentBtn = document.getElementById("complimentButton")

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
        });
};

fortuneBtn.addEventListener('click', getFortune)


