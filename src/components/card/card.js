import React, { Component } from "react";
import "./card.scss";
import axios from "axios";
export default class Singleelement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null
    };
  }
  componentDidMount() {
    axios
      .get("https://via.placeholder.com/150")
      .then(response => {
        this.setState({ image: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.state.image);
  }

  render() {
    return (
      <div className="cardCont">
        <div className="imgContainer">
          <div className="show">
            <h1 className="showText">SHOW ME</h1>
          </div>
          <img src={this.props.datiPerCard.project_img} alt="" />
        </div>
        <h1 className="cardFont">{this.props.datiPerCard.project_name}</h1>
        <h1 className="cardFont">{this.props.datiPerCard.project_date}</h1>
        <h1 className="cardFont">
          {this.props.datiPerCard.project_description}
        </h1>
      </div>
    );
  }
}
