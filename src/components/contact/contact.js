import React, { Component } from "react";
import axios from "axios";
import { Spinner, Alert } from "reactstrap";
import "./contact.scss";

const API_PATH = "http://localhost:4040/form/add";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      mailSent: false,
      error: null,
      formVisibility: true,
      visible: false
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        this.setState({
          name: "",
          email: "",
          message: "",
          formVisibility: false
        });

        this.onDismiss = this.onDismiss.bind(this);
      })
      .catch(error => this.setState({ error: error.message }));

    setTimeout(() => {
      this.setState({
        mailSent: true,
        formVisibility: true,
        visible: true
      });
    }, 2000);
  };
  onDismiss() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        {this.state.formVisibility === false && (
          <Spinner
            color="primary"
            className={`App ${!this.state.formVisibility && "showed"}`}
          />
        )}
        <div className={`App ${this.state.formVisibility && "showed"}`}>
          <div>
            {this.state.mailSent && (
              <Alert
                color="success"
                isOpen={this.state.visible}
                toggle={this.onDismiss}
              >
                Message sent successfully
              </Alert>
            )}
          </div>
          <p>Contact Me</p>
          <div>
            <form>
              <label>First Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />

              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />

              <label>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write something.."
                onChange={e => this.setState({ message: e.target.value })}
                value={this.state.message}
              ></textarea>
              <input
                type="submit"
                value="Submit"
                onClick={this.handleFormSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
