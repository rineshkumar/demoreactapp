import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';
import axios from 'axios';

function App() {
  const [persons, setPersons] = useState([{temperatureC : 0 , summary : "initial"}]);
  const url : string   =process.env.REACT_APP_API_URL ?? "http://localhost:30000/weatherforecast"
  useEffect(()=>{
    axios.get(url)
    .then(res => {
      
      const persons = res.data;
      setPersons(persons)
    }).catch(error =>{
      
      setPersons([{temperatureC : 0 , summary : "initial"}])
    }) 
  },[]);
  return (
    <div className="App">
      <p>Environment Variable : {url}</p>
      <ul>
      {
          persons
            .map(person =>
              <li key={person.temperatureC}>{person.summary}</li>
            )
        }
      </ul>
    
    </div>
  );
}

export default App;
