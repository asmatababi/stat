import React, { Component } from "react";

export class Profile extends Component {
  state = {
    timer: 0,
  };
  componentDidMount = () => {
    this.intervalId = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  render() {
    const { imgSrc, Profession, FullName } = this.props;

    return (
      <div>
        <h1>{FullName}</h1>
        <h1>{Profession}</h1>
        <img src={imgSrc} alt="etudiante.jpeg" />
        <h2>{this.state.timer}</h2>
      </div>
    );
  }
}

export default Profile;
