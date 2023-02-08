import './App.css';
import React, { Component } from 'react'
import Profile from './Component/Profile';
import image from './etudiante.jpeg';

 class App extends Component {
  state ={
    person: {
      FullName:"Asma tababi",
      Bio: "Gomycode student",
      imageSrc:image,
      Profession: "Etudiante"
      },
      show: false,
      };
      toggleShow= () => this.setState({ show: !this.state.show }) 
      render() {
        return(
          <div className="container">
        <button className="button" onClick={this.toggleShow}>
          {" "}
          {this.state.show ? "Hide" : "Show"}
          Profile
        </button>
        <div>
          {this.state.show && (
            <Profile
              FullName={this.state.person.FullName}
              Bio={this.state.person.Bio}
              imgSrc={this.state.person.imageSrc}
              Profession={this.state.person.Profession}
            />
          )}
        </div>
      </div>
    );
  }
}
export default App;
      
