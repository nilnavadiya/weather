import React, { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <div>
        <div className="body-loading">
          {/* <div className="center-loading"> */}
            <div className="loading"></div>;
          {/* </div> */}
        </div>
      </div>
    );
  }
}
