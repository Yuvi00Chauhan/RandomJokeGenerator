const URL="https://official-joke-api.appspot.com/jokes/programming/random";
const joke=document.querySelector("#joke");
const btn=document.querySelector("#jokeBtn");

const getJoke=async()=>{
console.log("Geting joke........");
let response=await fetch(URL);
console.log(response);
let data=await response.json();
joke.value=data[0].setup+"  "+data[0].punchline;
console.log("joke found");
}

btn.addEventListener("click",getJoke);