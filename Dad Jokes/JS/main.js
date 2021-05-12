const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()
//USING async await
async function generateJoke(){//if you have await, you need to label the function async
const config = {
    headers: {
        Accept: 'application/json'//object to accept headers so we don't get html
    },
}

const res = await fetch('https://icanhazdadjoke.com', config)

const data = await res.json()

jokeEl.innerHTML = data.joke 

}//cleaner way to write bc it puts fetch and res.json into variables, this is the more popular way to do this

/*USING .then
fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke//accessing joke from entire object
    })
}

function generateJoke(){
    const config = {
        headers: {
            Accept: 'application/json'//object to accept headers so we don't get html
        },
    }
    
    
    fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke//accessing joke from entire object
        })
    }*/