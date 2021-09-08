import React, { useState, useEffect } from 'react';
import '../styles/style.css'

function Jokes(){
  const [number, setNumber] = useState(20);
  const [jokes, setJokes] = useState([]);

  function apiFetch(){
  const fetchApi = fetch(`http://api.icndb.com/jokes/random/${number}`)
    .then((response) => response.json())
    .then((result) => setJokes(result.value))
    return fetchApi;
  }

  const fetchMore = () => {         
    setNumber(number + 10);
  };

    useEffect(() => {
      apiFetch();
    }, [number])

  return(
    <div className="container">
      <header>
        <h1 className = "title"> Chuck Norris Jokes </h1>
        <img src="./chuck.jpeg"/>
      </header>
      <main>
        {jokes.map((joke, index) => {
          return <p className = "joke" key = {joke.id}>{joke.joke}</p>
        })}
        <button className="numJokes" onClick={fetchMore}>Carregar mais</button>
      </main>
    </div>
  )

}

export default Jokes;