import React from 'react';
import email from "../images/email.svg";


class Email extends React.Component {
  copy() {
    navigator.clipboard.writeText("leo_shin@outlook.com");
    alert("Copied to clipboard.");
  }
  render() {
    return (
        <img src={email} width="35px" alt="" onClick={this.copy}></img>
    );
  }
}

export default Email