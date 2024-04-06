import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:32771/weatherforecast`)
      .then(res => {
        
        const persons = res.data;
        this.setState({ persons });
      }).catch(error =>{
        debugger
        this.setState([{temperatureC : 0 , summary : 'error'}])
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.temperatureC}>{person.summary}</li>
            )
        }
      </ul>
    )
  }
}