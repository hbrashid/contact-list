import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class People extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLiked: false
    };
  }

  handleClick = () => {
    this.setState({
      isLiked: !this.state.isLiked
    })
}

  render() {
  return (
    <div style={{margin: '0 auto 60px auto', width: '500px', border: '1px solid black', padding: '20px', borderRadius: '4px'}} >
    <img src={this.props.people.picture.large} alt={'random people'} />
  <button onClick={this.handleClick} >{this.state.isLiked ? <div> Hide Details: {this.props.people.location.country}, {this.props.people.email}, {this.props.people.dob.age}</div> : 'Show Details'}</button>
  <div>{this.props.people.name.first} {this.props.people.name.last}</div>
    </div>
  );
}
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      people: []
    };
  }

  componentDidMount () {
    fetch('https://randomuser.me/api?results=25')
    .then(json => json.json())
    .then(data => {
      this.setState({
        people: [...data.results]
      })
      console.log(data);
    })
  }
  

 

render() {
return (
  <div className="App">
    {this.state.people.map((peopleData, index) => (
    <People key={index} people={peopleData} />
    ))}
  </div>
  );
  }
  }


export default App;
