 const jokeEl = document.getElementById('joke');
 const get_joke = document.getElementById('get_joke');

 // add eventlisteneer to th button
 get_joke.addEventListener('click', generatejoke);

 async function generatejoke() {
    //call the api
    const jokeRes = await fetch('https://icanhazdadjoke.com/',
    {
         headers: {
            accept: 'application/json'
         }
    });

    const joke = await jokeRes.json();
    console.log(joke);
    //set random joke
    jokeEl.innerHTML = joke.joke;
 }

